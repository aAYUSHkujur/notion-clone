import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceKey:object = await import("@/service_key.json");

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
}
else {
    app = getApp();
}

const admindb = getFirestore(app);

export { app as adminApp, admindb };
