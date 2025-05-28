import { type ReactNode, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = () => {
      const adminLoggedIn = localStorage.getItem("adminLoggedIn")
      setIsAuthenticated(adminLoggedIn === "true")
    }

    checkAuth()
  }, [])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAEDE2]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#651C32] mx-auto mb-4"></div>
          <p className="text-[#651C32]">Loading...</p>
        </div>
      </div>
    )
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />
}
