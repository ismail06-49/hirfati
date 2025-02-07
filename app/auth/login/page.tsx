import { signIn } from '@/auth';
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

function Login() {
    return (
        <div className='w-full h-screen'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <Image src='/logo.png' alt="logo" width={200} height={120} />
                <h1>فين تقدر تلقى اي حرفة</h1>
                <form action={async () => {
                    "use server";
                    await signIn('google')
                }}>
                    <Button type='submit'>
                        <FcGoogle />
                        تسجيل بحساب جوجل
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
