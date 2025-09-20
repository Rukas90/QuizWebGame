import { FieldProps } from "@/types/FieldProps"
import InputField from "./InputField"

const UsernameField = (props: FieldProps) => {
  return (
    <InputField
      id="username-field"
      type="text"
      placeholder="Enter Username"
      label="Username"
      required
      {...props}
    />
  )
}
export default UsernameField
