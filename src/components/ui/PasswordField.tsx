import { FieldProps } from "@/types/FieldProps"
import InputField from "./InputField"

const PasswordField = (props: FieldProps) => {
  return (
    <InputField
      id="password-field"
      type="password"
      placeholder="Enter Password"
      label="Password"
      required
      {...props}
    />
  )
}
export default PasswordField
