import { BaseElementProps } from "@/types/BaseElementProps"

const AbsoluteContainer = ({ children, id, classes }: BaseElementProps) => {
  return (
    <div id={id} className={`absolute ${classes}`}>
      {children}
    </div>
  )
}
export default AbsoluteContainer
