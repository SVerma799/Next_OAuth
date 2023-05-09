import React from "react";
import { useSession, signOut } from "next-auth/react";
export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome {session.user?.name}</h1>
        </>
      ) : (
        <>
          <h1>Not signed in. Kindly Sign in.</h1>
        </>
      )}
    </div>
  );
}
