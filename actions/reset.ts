'use server';

import * as z from 'zod';
import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generateResetPasswordToken } from '@/lib/tokens';
import { sendResetPasswordEmail } from '@/lib/mail';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: 'البريد الإلكتروني غير صالح!'
        }
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: 'لم يتم العثور على البريد الإلكتروني!' };
    }

    const passwordResetToken = await generateResetPasswordToken(email)
    await sendResetPasswordEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return { success: 'تم إرسال البريد الإلكتروني لإعادة التعيين!'}
}