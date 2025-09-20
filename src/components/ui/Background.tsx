import type { ReactNode } from "react"
import { ClassesProps } from "@/types/ClassesProps"

export enum BackgroundType {
  Index = "index",
  Auth = "auth",
  Play = "play",
}
interface Props extends ClassesProps {
  children?: ReactNode
  type: BackgroundType
}
const Background = ({ children, type, classes }: Props) => {
  return (
    <div
      id="background"
      className={`min-vw-100 min-vh-100 flex ${type} ${classes}`}
    >
      {children}
    </div>
  )
}
export default Background
