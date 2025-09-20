import { RegisterFormData } from "@/types/RegisterFormData"
import { useValidatableField } from "./useValidatableField"
import {
  HasLowercase,
  HasNumber,
  HasSpecialCharacter,
  HasUppercase,
  IsEmail,
  Matches,
  MinLength,
  NotNull,
} from "@/utils/Validators"

export const useRegisterForm = () => {
  const email = useValidatableField([NotNull, IsEmail])
  const username = useValidatableField([NotNull, MinLength(6)])
  const password = useValidatableField([
    NotNull,
    MinLength(12),
    HasUppercase,
    HasLowercase,
    HasNumber,
    HasSpecialCharacter,
  ])
  const repeatPassword = useValidatableField([
    NotNull,
    Matches(password.getValue),
  ])
  const isValid = () =>
    email.isValid &&
    username.isValid &&
    password.isValid &&
    repeatPassword.isValid

  const getForm = (): RegisterFormData => {
    return {
      Email: email.value,
      Username: username.value,
      Password: password.value,
      RepeatPassword: repeatPassword.value,
    }
  }
  return {
    email,
    username,
    password,
    repeatPassword,
    isValid,
    getForm,
  }
}
