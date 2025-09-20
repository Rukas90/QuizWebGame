import { Navigate, Outlet } from "react-router-dom"
import { UseAuthContext } from "@/contexts/AuthContext"

const GuestOnlyRoutes = () => {
  const { isAuthenticated, isLoading } = UseAuthContext()

  if (isLoading) {
    return null
  }
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}
export default GuestOnlyRoutes
