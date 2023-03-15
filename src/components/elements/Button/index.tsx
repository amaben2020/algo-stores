import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session }: any = useSession();

  if (typeof session !== "undefined") {
    return (
      <>
        Signed in as {session?.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
