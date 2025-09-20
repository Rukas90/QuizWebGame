import { MouseEventHandler, ReactNode } from "react"

interface Props {
  children?: ReactNode
  classes?: string
  onClick?: MouseEventHandler
}
const ButtonA = ({ children, classes, onClick }: Props) => {
  return (
    <button onClick={onClick} id="button-a" className={classes}>
      {children}
    </button>
  )
}
export default ButtonA
