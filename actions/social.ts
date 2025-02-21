'use server' 

import { signIn } from '@/auth';

export const social = async () => {
    return await signIn('google')
}