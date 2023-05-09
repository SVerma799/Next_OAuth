import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome {session.user?.name}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Not signed in. Kindly Sign in.</h1>
        </>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
