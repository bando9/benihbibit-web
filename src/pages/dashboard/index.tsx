import { Button } from "@/components/ui/button"
import { useUser } from "@/modules/auth/hooks"

function Dashboard() {
  const { error, isLoading, user, logout } = useUser()

  if (isLoading) return <p className="text-sm text-gray-800">...waiting</p>
  if (error) return null

  return (
    <div className="mx-15">
      <h1>Dashboard</h1>

      <p>{user?.username}</p>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}

export default Dashboard
