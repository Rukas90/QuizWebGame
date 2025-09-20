import { HTMLInputTypeAttribute } from "react"
import { FieldProps } from "@/types/FieldProps"

interface Props extends FieldProps {
  id: string
  type: HTMLInputTypeAttribute
  placeholder?: string
  label: string
  required?: boolean
}

const InputField = ({
  id,
  type,
  placeholder,
  label,
  classes,
  required = false,
  isInvalid = false,
  onChange,
}: Props) => {
  return (
    <div className={`form-floating ${classes}`}>
      <input
        type={type}
        className={`form-control ${isInvalid && "is-invalid"}`}
        id={id}
        placeholder={placeholder}
        onChange={(change) => onChange?.(change.target.value)}
      />
      <label htmlFor={id}>
        {label}
        {required ? "*" : ""}
      </label>
    </div>
  )
}
export default InputField
