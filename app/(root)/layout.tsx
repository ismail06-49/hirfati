import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Navbar } from "./_components/navbar";
import { currentUser } from '@/lib/auth';

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await auth();
    const user = await currentUser();

    return (
        <SessionProvider session={session}>
            <main className='min-h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600 to-red-950 p-4 sm:p-6 md:p-8 lg:p-10'>
                {user && <Navbar />}
                <div className='w-full max-w-4xl'>
                    {children}
                </div>
            </main>
        </SessionProvider>
    )
}