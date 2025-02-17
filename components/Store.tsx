import { signOut } from '@/auth'
import React from 'react'

function Store() {
    return (
        <div>
            Store
            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button type='submit'> تسجيل الخروج </button>
            </form>
        </div>
    )
}

export default Store
