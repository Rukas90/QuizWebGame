import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react"
import { GetAuthInfo, Refresh } from "@/services/AuthRequests"
import { AuthInfo } from "@/types/AuthInfo"
import { useLocation } from "react-router-dom"

export type AuthContextState = {
  isLoading: boolean
  authInfo: AuthInfo | null
  isAuthenticated: boolean
  checkAuth: () => Promise<void>
}

const AuthContext = createContext<AuthContextState>(null!)
export const UseAuthContext = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState<AuthInfo | null>(null)

  const fetchAuthInfo = useCallback(async () => {
    const response = await GetAuthInfo(true)
    if (!response.success) {
      setInfo(null)
      return null
    }
    setInfo(response.data)
    return response.data
  }, [])

  const refreshAuth = async () => {
    const response = await Refresh()
    if (response.success) {
      window.csrfToken = response.data.csrfToken
    }
  }
  const checkAuth = useCallback(async () => {
    setIsLoading(true)
    try {
      const authInfo = await fetchAuthInfo()
      if (authInfo.status.isAuthenticated) {
        return
      }
      await refreshAuth()
      await fetchAuthInfo()
    } catch {
      setInfo(null)
    } finally {
      setIsLoading(false)
    }
  }, [fetchAuthInfo])

  useEffect(() => {
    checkAuth()
  }, [location.pathname])

  const isAuthenticated =
    !isLoading && info !== null && info.status.isAuthenticated

  const contextValue = useMemo<AuthContextState>(
    () => ({
      isLoading,
      authInfo: info,
      isAuthenticated,
      checkAuth,
    }),
    [isLoading, info, isAuthenticated]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}
