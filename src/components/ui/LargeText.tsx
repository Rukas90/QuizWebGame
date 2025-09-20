import { ChildrenProps } from "@/types/ChildrenProps"
import { ClassesProps } from "@/types/ClassesProps"

interface Props extends ChildrenProps, ClassesProps {}

const LargeText = ({ children, classes }: Props) => {
  return <p className={`large-text ${classes}`}>{children}</p>
}
export default LargeText
