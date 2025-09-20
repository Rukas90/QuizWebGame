import { Navigate, Outlet, useLocation } from "react-router-dom"
import { UseAuthContext } from "@/contexts/AuthContext"

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = UseAuthContext()
  const location = useLocation()

  if (isLoading) {
    return null
  }
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )
}
export default ProtectedRoutes
