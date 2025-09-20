import { useRef } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"

interface CaptchaProps {
  onLoaded?: () => void
  setToken: (token: string | null) => void
  onExpired?: () => void
  onError?: (error: string) => void
  validateAutomatically?: boolean
  sitekey?: string
}

const Captcha = ({
  onLoaded,
  setToken,
  onExpired,
  onError,
  validateAutomatically = false,
  sitekey = "7a083ca8-0726-4d44-bbfc-b7382bfe7e4e",
}: CaptchaProps) => {
  const captchaRef = useRef<HCaptcha>(null)

  const captchaVerify = (token: string) => {
    setToken(token)
  }
  const captchaExpire = () => {
    setToken(null)
    captchaRef.current?.resetCaptcha()

    if (onExpired) onExpired()
  }
  const captchaLoaded = () => {
    if (onLoaded) onLoaded()

    if (validateAutomatically) {
      captchaRef.current?.execute()
    }
  }
  const captchaError = (error: string) => {
    if (onError) onError(error)
  }
  return (
    <HCaptcha
      sitekey={sitekey}
      onLoad={captchaLoaded}
      onVerify={captchaVerify}
      onExpire={captchaExpire}
      onError={captchaError}
      ref={captchaRef}
    />
  )
}
export default Captcha
