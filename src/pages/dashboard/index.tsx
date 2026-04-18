import { Button } from "@/components/ui/button"
import { useUser } from "@/modules/auth/hooks"

function Dashboard() {
  const { error, isLoading, user, logout } = useUser()

  if (isLoading) return <p className="text-sm text-gray-800">...waiting</p>
  if (error) return null

  return (
    <div className="m-15">
      <div className="rounded-2xl border border-border bg-card p-6">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Hello, {user?.name}!</h1>
          <p className="text-sm text-muted-foreground">
            Manage your plant-growing identity here.
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex flex-col border-b pb-2">
            <span className="text-xs font-medium text-primary uppercase">
              Full Name
            </span>
            <span className="text-lg font-semibold">{user?.name}</span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="text-xs font-medium text-primary uppercase">
              Username
            </span>
            <span className="text-lg font-semibold text-muted-foreground">
              @{user?.username}
            </span>
          </div>

          <div className="flex flex-col border-b pb-2">
            <span className="text-xs font-medium text-primary uppercase">
              Email Address
            </span>
            <span className="text-lg font-semibold">{user?.email}</span>
          </div>
        </div>

        <div className="mt-8">
          <Button variant="outline" onClick={logout}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
