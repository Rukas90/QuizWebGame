import { useAuth } from "@/contexts/AuthContext"
import { Login } from "@/services/AuthRequests"
import { LoginFormData } from "@/types/LoginFormData"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const auth = useAuth()
  const navigate = useNavigate()

  const makeRequest = async (form: LoginFormData) => {
    if (!captchaToken) {
      return
    }
    const response = await Login({
      ...form,
      CaptchaToken: captchaToken,
    })
    if (!response.success) {
      return
    }
    window.csrfToken = response.data.csrfToken
    await auth.checkAuth()
    navigate(response.data.redirectUrl)
  }
  return {
    makeRequest,
    setCaptchaToken,
  }
}
