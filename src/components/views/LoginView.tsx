import Background, { BackgroundType } from "../ui/Background"
import Captcha from "@/ui/Captcha"
import LargeHeaderText from "@/ui/LargeHeaderText"
import Link from "@/ui/Link"
import LoginForm from "@/forms/LoginForm"
import Paragraph from "@/ui/Paragraph"
import { useLogin } from "@/hooks/useLogin"

const LoginView = () => {
  const login = useLogin()
  return (
    <Background
      type={BackgroundType.Auth}
      classes="justify-center items-center flex-col"
    >
      <LargeHeaderText>LOGIN</LargeHeaderText>
      <Paragraph>
        Don't have an account? <Link to="/register">Register</Link>
      </Paragraph>
      <LoginForm onSubmit={login.makeRequest} />
      <Captcha setToken={login.setCaptchaToken} />
    </Background>
  )
}
export default LoginView
