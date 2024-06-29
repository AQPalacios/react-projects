import { Title } from "../components/primitives"
import { RegisterForm } from "../components/ui/register-page/RegisterForm"

export const RegisterPage = () => {
  return (
    <div className="px-2">
        <Title title="Registrarse"/>
        <div className="flex justify-center">
                <RegisterForm />
            </div>
    </div>
  )
}
