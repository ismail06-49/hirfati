"use server"

import * as z from 'zod'
import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth';
import { DEAFULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { generateVerificationToken } from '@/lib/tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'معطيات غير صحيحة!' };
    }

    const { email, password } = validatedFields.data

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: 'البريد الإلكتروني غير موجود!' };
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );

        return { success: 'تم إرسال بريد إلكتروني للتأكيد!' };
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEAFULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'بيانات غير صحيحة!' }
                default:
                    return {error: 'لقد حدث خطأ ما!'}
            }
        }
        throw error;
    }
};