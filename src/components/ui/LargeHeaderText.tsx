import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

const LargeHeaderText = ({ children }: Props) => {
  return (
    <label id="large-header-text">
      {children}
    </label>
  )
}
export default LargeHeaderText
