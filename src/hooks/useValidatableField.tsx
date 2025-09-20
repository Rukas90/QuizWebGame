import { useEffect, useState } from "react"
import { validateFirst, Validator } from "@/utils/Validators"

export const useValidatableField = (validators?: Validator<string>[]) => {
  const [value, setValue] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [touched, setTouched] = useState<boolean>(false)

  useEffect(() => {
    if (!validators || !touched) return

    const result = validateFirst(value, validators)
    setError(result.success ? "" : result.error)
  }, [value, validators, touched])

  const validate = (): boolean => {
    setTouched(true)
    const result = validateFirst(value, validators || [])
    setError(result.success ? "" : result.error)
    return result.success
  }
  const getValue = (): string => value

  return {
    value,
    setValue: (newValue: string) => {
      setTouched(true)
      setValue(newValue)
    },
    error,
    isValid: error === "",
    validate,
    touched,
    getValue,
  }
}
