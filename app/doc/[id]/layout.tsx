import RoomProvider from "@/components/RoomProvider";
import React from "react";
import { auth } from "@clerk/nextjs/server";

function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = React.use(params); // Unwrap the Promise using React.use()

  auth.protect();

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
export default DocLayout;
