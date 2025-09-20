import ButtonB from "./ButtonB"
import { ClassesProps } from "@/types/ClassesProps"

const SubmitButton = ({ classes }: ClassesProps) => {
  return (
    <ButtonB type="submit" classes={classes}>
      Submit
    </ButtonB>
  )
}
export default SubmitButton
