'use client'

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation"

export const Navbar = () => {

    const pathname = usePathname();

    return (
        <nav className="bg-secondary flex items-center justify-between p-4 rounded-xl w-full max-w-4xl h-[60px] shadow-sm mt-1 mx-auto">
            <div className="flex gap-x-2">
                <Button
                    asChild
                    variant={pathname === '/' ? 'default' : 'outline'}
                >
                    <Link href='/'>
                        الصفحة الرئيسية
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === '/settings' ? 'default' : 'outline'}
                >
                    <Link href='/settings'>
                        إعدادات
                    </Link>
                </Button>
                <UserButton />
            </div>
        </nav>
    )
}