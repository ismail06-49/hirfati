import { auth } from "@/auth";
import Store from "@/components/Store";
import Login from "@/components/Login";

export default async function Home() {

  const session = await auth();

  return (
    <>
      <div>
        {session && session?.user ? (
          <Store />
          ) : (
          <Login />
        )}
      </div>
    </>
  );
}
