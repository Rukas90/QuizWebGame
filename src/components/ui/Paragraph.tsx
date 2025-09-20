import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}
const Paragraph = ({ children }: Props) => {
    return <p className="paragraph-base">{children}</p>
}
export default Paragraph