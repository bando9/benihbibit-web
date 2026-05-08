import { Outlet, Link } from "react-router"
import { RiLock2Line } from "@remixicon/react"

export function CheckoutLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <header className="border-b bg-background py-4">
        <div className="container mx-auto flex max-w-4xl items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold text-primary">
            benihbibit.
          </Link>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <RiLock2Line size={16} />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl flex-1 px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
