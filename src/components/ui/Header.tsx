import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

const Header = ({ children }: Props) => {
  return <label id="large-header-text">{children}</label>
}
export default Header
