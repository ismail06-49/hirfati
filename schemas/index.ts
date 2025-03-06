import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "تاكد من بريدك الإلكتروني"
    }),
    password: z.string().min(6, {
        message: "تاكد من كلمة السر"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "البريد الإلكتروني ضروري"
    }),
    password: z.string().min(6, {
        message: "الحد الأدنى 6 أحرف"
    }),
    name: z.string().min(3, {
        message: 'الإسم ضروري'
    })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "تاكد من بريدك الإلكتروني"
    })
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "الحد الأدنى 6 أحرف"
    })
})

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    image: z.optional(z.string()),
}).refine((data) => {
    if (data.password && !data.newPassword) {
        return false;
    }
    return true;
}, {
    message: "تأكد من كلمة السر الجديدة",
    path: ["newPassword"],
}).refine((data) => {
    if (data.newPassword && !data.password) {
        return false;
    }
    return true;
}, {
    message: "تأكد من كلمة السر الحالية",
    path: ["password"],
})