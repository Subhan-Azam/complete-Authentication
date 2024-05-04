"use client";
import { signOut, useSession } from "next-auth/react";

export default function UserLogOut() {
  const { data: session } = useSession();


  return (
    <div className="grid place-items-center h-screen">
      <div className="w-96 shadow-2xl bg-zinc-300/50 rounded-lg px-7 py-8 space-y-4">
        <h1 className="text-2xl font-bold">User LogOut</h1>
        <div>
          <b>Name: </b> <span>{session?.user?.name}</span>
        </div>
        <div>
          <b> Email:</b> <span>{session?.user?.email}</span>
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className="mb-3 w-full py-2 text-lg font-semibold rounded-lg text-white bg-red-600"
          >
            LogOut
          </button>
          {/* <button
            onClick={() => signOut()}
            className="w-full py-2 text-lg font-semibold rounded-lg text-white bg-red-600"
          >
            Delete Account
          </button> */}
        </div>
      </div>
    </div>
  );
}
