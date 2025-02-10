import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card'
import Image from 'next/image';
import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

interface CardwrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref
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
            <CardFooter className='w-full'>
                <form className='w-full' action={async () => {
                    "use server";
                    await signIn('google')
                }}>
                    <Button
                        type='submit'
                        className='w-full'
                    >
                        <FcGoogle />
                        تسجيل بحساب جوجل
                    </Button>
                </form>
            </CardFooter>
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