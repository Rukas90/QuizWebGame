import EmailField from "@/ui/EmailField"
import { FormProps } from "@/types/FormProps"
import PasswordField from "@/ui/PasswordField"
import { RegisterFormData } from "@/types/RegisterFormData"
import RepeatPasswordField from "@/ui/RepeatPasswordField"
import SubmitButton from "@/ui/SubmitButton"
import { useRegisterForm } from "@/hooks/useRegisterForm"
import UsernameField from "@/ui/UsernameField"

const RegisterForm = ({ onSubmit }: FormProps<RegisterFormData>) => {
  const registerForm = useRegisterForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!registerForm.isValid()) return

    onSubmit?.(registerForm.getForm())
  }
  const R_CLASSES = "mb-3 w-100"

  return (
    <form
      onSubmit={handleSubmit}
      id="form-container"
      className="justify-center items-center flex flex-col"
    >
      <EmailField
        classes={R_CLASSES}
        onChange={registerForm.email.setValue}
        isInvalid={!registerForm.email.isValid}
      />
      <UsernameField
        classes={R_CLASSES}
        onChange={registerForm.username.setValue}
        isInvalid={!registerForm.username.isValid}
      />
      <PasswordField
        classes={R_CLASSES}
        onChange={registerForm.password.setValue}
        isInvalid={!registerForm.password.isValid}
      />
      <RepeatPasswordField
        classes={R_CLASSES}
        onChange={registerForm.repeatPassword.setValue}
        isInvalid={!registerForm.repeatPassword.isValid}
      />
      <SubmitButton classes="mb-3" />
    </form>
  )
}
export default RegisterForm
