import { LoginFormData } from "@/types/LoginFormData"
import { useValidatableField } from "./useValidatableField"
import { NotNull } from "@/utils/Validators"

export const useLoginForm = () => {
  const email = useValidatableField([NotNull])
  const password = useValidatableField([NotNull])

  const isValid = () => email.isValid && password.isValid
  const getForm = (): LoginFormData => {
    return {
      Email: email.value,
      Password: password.value,
    }
  }
  return {
    email,
    password,
    isValid,
    getForm,
  }
}
