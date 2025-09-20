import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  classes?: string
  type?: "submit" | "reset" | "button" | undefined
}
const ButtonB = ({ children, classes, type }: Props) => {
  return (
    <button type={type} id="button-b" className={classes}>
      {children}
    </button>
  )
}
export default ButtonB
