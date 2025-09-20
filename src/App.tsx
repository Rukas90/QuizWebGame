import { useEffect } from "react"
import "./App.css"
import AppRouter from "./AppRouter"
import { AuthProvider } from "@/contexts/AuthContext"
import { RefreshCsrfToken } from "@/services/AuthRequests"

const App = () => {
  useEffect(() => {
    if (!window.csrfToken) {
      RefreshCsrfToken()
    }
  }, [])
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
export default App
