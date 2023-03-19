import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks/hooks";
import { login } from "~/app/redux/features/user/user-slice";
import { RootState } from "~/app/redux/store/store";

//TODO: Extract to a useAuth hook and return signin, signup, userSession

export default function LoginButton() {
  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  const { data: session }: any = useSession();

  useEffect(() => {
    dispatch(
      login({
        email: session?.user?.email,
        image: session?.user?.image,
        name: session?.user?.name,
      }),
    );
  }, [
    dispatch,
    session?.user?.email,
    session?.user?.image,
    session?.user?.name,
    user.email,
  ]);

  if (user?.email) {
    return (
      <>
        Signed in as {user.email} <br />
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
