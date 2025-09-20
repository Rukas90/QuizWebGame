import { FieldProps } from "@/types/FieldProps"
import InputField from "./InputField"

const EmailField = (props: FieldProps) => {
  return (
    <InputField
      id="email-field"
      type="email"
      placeholder="Enter Email"
      label="Email"
      required
      {...props}
    />
  )
}
export default EmailField
