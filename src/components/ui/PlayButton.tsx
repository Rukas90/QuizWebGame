import ButtonA from "@/ui/ButtonA"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const PlayButton = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const OnPlayGame = () => {
    if (!auth.isAuthenticated) {
      navigate("/login")
      return
    }
    navigate("/play")
  }
  return <ButtonA onClick={OnPlayGame}>PLAY</ButtonA>
}
export default PlayButton
