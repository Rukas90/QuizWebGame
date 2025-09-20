import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { Logout } from "@/services/AuthRequests"

const LogoutButton = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const logout = async () => {
    const response = await Logout()

    if (!response.success) {
      return
    }
    await auth.checkAuth()
    navigate(response.data.redirectUrl)
  }
  return <button onClick={logout}>Logout</button>
}
export default LogoutButton
