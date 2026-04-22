import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import { Toaster } from "@/components/ui/sonner"
import { Outlet } from "react-router"

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  )
}

export default MainLayout
