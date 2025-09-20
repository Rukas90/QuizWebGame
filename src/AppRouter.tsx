import { Routes, Route } from "react-router-dom"
import LoginView from "@/components/views/LoginView"
import IndexView from "@/components/views/IndexView"
import RegisterView from "@/components/views/RegisterView"
import PlayView from "@/components/views/GameView"
import ProtectedRoutes from "@/auth/ProtectedRoutes"
import GuestOnlyRoutes from "@/auth/GuestOnlyRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexView />} />
      <Route element={<GuestOnlyRoutes />}>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/play" element={<PlayView />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
