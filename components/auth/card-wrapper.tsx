'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { social } from '@/actions/social';

interface CardwrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardwrapperProps) => {
    return (
        <Card className='w-[400px] flex flex-col items-center justify-center shadow-md'>
            <CardHeader>
                <Image src='/logo.png' alt="logo" width={200} height={120} />
                <h2 className='text-lg text-center font-semibold'>{headerLabel}</h2>
            </CardHeader>
            <CardContent className='w-full'>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter className='w-full'>
                        <form className='w-full' action={() =>{social()}}>
                            <Button
                                type='submit'
                                className='w-full'
                            >
                                تسجيل بحساب جوجل
                                <FcGoogle />
                            </Button>
                        </form>
                    </CardFooter>
                )
            }
            <CardFooter>
                <Button variant='link'>
                    <Link href={backButtonHref}>
                        {backButtonLabel}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}