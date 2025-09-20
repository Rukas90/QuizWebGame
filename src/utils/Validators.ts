import { Result, Success, Failure } from "@/types/Result"

export type Validator<T> = (value: T) => Result<T, string>

export const NotNull: Validator<string> = value => {
  if (value?.trim()) {
    return Success(value.trim())
  }
  return Failure("This field is required")
}
export const IsEmail: Validator<string> = value => {
  if (/\S+@\S+\.\S+/.test(value)) {
    return Success(value)
  }
  return Failure("Invalid email address")
}
export const MinLength = (len: number): Validator<string> => value => {
  if (value.length >= len) {
    return Success(value)
  }
  return Failure(`Must be at least ${len} characters`)
}
export const HasSpecialCharacter: Validator<string> = value => {
  if (/[^A-Za-z0-9]/.test(value)) {
    return Success(value)
  }
  return Failure("Requires special character")
}
export const HasNumber: Validator<string> = value => {
  if (/[0-9]/.test(value)) {
    return Success(value)
  }
  return Failure("Requires number character (0-9)")
}
export const HasUppercase: Validator<string> = value => {
  if (/[A-Z]/.test(value)) {
    return Success(value)
  }
  return Failure("Requires uppercase character (A-Z)")
}
export const HasLowercase: Validator<string> = value => {
  if (/[a-z]/.test(value)) {
    return Success(value)
  }
  return Failure("Requires lowercase character (a-z)")
}
export const Matches = (otherValue: () => string): Validator<string> => value => {
  if (value === otherValue()) {
    return Success(value)
  }
  return Failure("Requires value match")
}

export const validateAll = <T>(value: T, validators: Validator<T>[]): Result<T, string> => {
  const errors: string[] = []
  
  for (const validator of validators) {
    const result = validator(value)
    if (!result.success) {
      errors.push(result.error)
    }
  }
  if (errors.length > 0) {
    return Failure(errors.join(', '))
  }
  return Success(value)
}
export const validateFirst = <T>(value: T, validators: Validator<T>[]): Result<T, string> => {
  for (const validator of validators) {
    const result = validator(value)

    if (!result.success) {
      return result
    }
  }
  return Success(value)
}