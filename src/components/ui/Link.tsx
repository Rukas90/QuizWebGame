import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  children?: ReactNode
  to: string
}
const Link = ({ children, to }: Props) => {
  const navigate = useNavigate()

  return (
    <span className="link" onClick={() => navigate(to, { replace: true })}>
      {children}
    </span>
  )
}
export default Link
