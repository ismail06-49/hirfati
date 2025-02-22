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