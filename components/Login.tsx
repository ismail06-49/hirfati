import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Login() {
    return (
        <div className='w-full h-screen'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <Image src='/logo.png' alt="logo" width={200} height={120} />
                <h1>فين تقدر تلقى اي حرفة</h1>
                <Button>
                    <Link href='/auth/login'>
                        تسجيل الدخول
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Login
