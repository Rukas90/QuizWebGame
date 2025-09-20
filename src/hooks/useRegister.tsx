import { useState } from "react"
import { RegisterFormData } from "@/types/RegisterFormData"
import { Register } from "@/services/AuthRequests"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

export const useRegister = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const auth = useAuth()
  const navigate = useNavigate()

  const makeRequest = async (form: RegisterFormData) => {
    if (!captchaToken) {
      return
    }
    const response = await Register({
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
