import { useUser } from "@/modules/auth/hooks"
import { Outlet, Navigate } from "react-router"

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useUser()

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

export default ProtectedRoute
