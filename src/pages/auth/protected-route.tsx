import { useUser } from "@/modules/auth/hooks"
import { Outlet, Navigate, useLocation } from "react-router"

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useUser()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent">
          Loading...
        </span>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
          message: "Please login first",
        }}
      />
    )
  }
  return <Outlet />
}

export default ProtectedRoute
