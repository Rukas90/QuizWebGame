import { useLoginForm } from "@/hooks/useLoginForm"
import { FormProps } from "@/types/FormProps"
import { LoginFormData } from "@/types/LoginFormData"
import EmailField from "@/ui/EmailField"
import PasswordField from "@/ui/PasswordField"
import SubmitButton from "@/ui/SubmitButton"

const LoginForm = ({ onSubmit }: FormProps<LoginFormData>) => {
  const loginForm = useLoginForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!loginForm.isValid()) return

    onSubmit?.(loginForm.getForm())
  }
  return (
    <form
      onSubmit={handleSubmit}
      id="form-container"
      className="justify-center items-center flex flex-col"
    >
      <EmailField
        classes="mb-3 w-100"
        onChange={loginForm.email.setValue}
        isInvalid={!loginForm.email.isValid}
      />
      <PasswordField
        classes="mb-3 w-100"
        onChange={loginForm.password.setValue}
        isInvalid={!loginForm.password.isValid}
      />
      <SubmitButton classes="mb-3" />
    </form>
  )
}
export default LoginForm
