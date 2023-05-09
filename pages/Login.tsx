import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Login() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Logged in as {session.user.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Not signed in</h1>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
