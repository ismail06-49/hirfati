'use client';

import Store from "@/components/Store";
import Signin from "@/components/Signin";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function Home() {

  const user = useCurrentUser();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-4xl">
        {user ? (
          <Store />
          ) : (
          <Signin />
        )}
      </div>
    </main>
  );
}
