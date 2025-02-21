import { CardWrapper } from '@/components/auth/card-wrapper';
import { LoginForm } from '@/components/auth/login-form'

function Login() {

    return (
        <CardWrapper
            headerLabel='مرحبا بعودتك'
            backButtonLabel="ليس لديك حساب؟"
            backButtonHref='/auth/register'
            showSocial= {true}
        >
            <LoginForm />
        </CardWrapper>
    )
}

export default Login
