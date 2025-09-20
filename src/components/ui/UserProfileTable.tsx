import { useAuth } from "@/contexts/AuthContext"
import LogoutButton from "./LogoutButton"

const UserProfileTable = () => {
  const auth = useAuth()
  return (
    <div id="user-profile-table-container">
      <h4>{auth.authInfo?.profile?.username}</h4>
      <h6>{auth.authInfo?.profile?.email}</h6>
      <LogoutButton />
    </div>
  )
}
export default UserProfileTable
