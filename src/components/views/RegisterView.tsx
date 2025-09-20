import { Link } from "react-router-dom"
import RegisterForm from "@/forms/RegisterForm"
import { useRegister } from "@/hooks/useRegister"
import Background, { BackgroundType } from "@/ui/Background"
import Captcha from "@/ui/Captcha"
import LargeHeaderText from "@/ui/LargeHeaderText"
import Paragraph from "@/ui/Paragraph"

const RegisterView = () => {
  const register = useRegister()

  return (
    <Background
      type={BackgroundType.Auth}
      classes="justify-center items-center flex-col"
    >
      <LargeHeaderText>REGISTER</LargeHeaderText>
      <Paragraph>
        Already have an account? <Link to="/login">Login</Link>
      </Paragraph>
      <RegisterForm onSubmit={register.makeRequest} />
      <Captcha setToken={register.setCaptchaToken} />
    </Background>
  )
}
export default RegisterView
