import { auth } from "@/auth";
import Store from "@/components/Store";
import Signin from "@/components/Signin";

export default async function Home() {

  const session = await auth();

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-800">
      <div>
        {session && session?.user ? (
          <Store />
          ) : (
          <Signin />
        )}
      </div>
    </main>
  );
}
