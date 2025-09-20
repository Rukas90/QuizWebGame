import { FieldProps } from "@/types/FieldProps"
import InputField from "./InputField"

const RepeatPasswordField = (props: FieldProps) => {
  return (
    <InputField
      id="repeat-password-field"
      type="password"
      placeholder="Repeat Password"
      label="Repeat Password"
      required
      {...props}
    />
  )
}
export default RepeatPasswordField
