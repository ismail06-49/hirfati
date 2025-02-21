import { CardWrapper } from '@/components/auth/card-wrapper';
import { RegisterForm } from '@/components/auth/register-form';

export default function Register() {

    return (
        <CardWrapper
            headerLabel='إنشاء حساب'
            backButtonLabel="هل لديك حساب بالفعل؟"
            backButtonHref='/auth/login'
            showSocial= {true}
        >
            <RegisterForm />
        </CardWrapper>
    )
}
