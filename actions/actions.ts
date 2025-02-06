'use server';

import { admindb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    auth.protect();

    const { sessionClaims } = await auth();

    const docCollectionRef = admindb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    })

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    await admindb.collection("users").doc(sessionClaims?.email!).collection("rooms").doc(docRef.id).set({
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
    })

    return { docId: docRef.id };
}

export async function deleteDocument(roomId: string) {
    auth.protect();

    console.log("Deleting document with id: ", roomId);

    try {
        await admindb.collection("documents").doc(roomId).delete();
        const query = await admindb.collectionGroup("rooms").where("roomId", "==", roomId).get();

        const batch = admindb.batch();
        query.docs.forEach((doc) => {
            batch.delete(doc.ref);
        })

        await batch.commit();

        await liveblocks.deleteRoom(roomId);

        return { success: true };

    } catch (error) {
        console.error(error);
        return { success: false };
    }

}