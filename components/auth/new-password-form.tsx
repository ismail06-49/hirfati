"use client"

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewPasswordSchema } from '@/schemas'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { CardWrapper } from './card-wrapper'
import { useSearchParams } from 'next/navigation'
import { newPassword } from './../../actions/new-password';

export function NewPasswordForm() {

    const searchParams = useSearchParams();
    const token = searchParams.get('token')

    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
            defaultValues: {
                password: '',
            },
    })

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError('')
        setSuccess('')
        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
            })
        })
    }

    return (
        <CardWrapper
            headerLabel='أدخل كلمة مرور جديدة'
            backButtonLabel='العودة إلى تسجيل الدخول'
            backButtonHref='/auth/login'
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='w-full text-left'>
                                        كلمة المرور
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder='******'
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >
                        إعادة تعيين كلمة المرور
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

