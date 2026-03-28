import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import NotFoundImage from "@/assets/not-found.gif"

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />

      <div className="bg-[#999] px-15 pt-5 pb-10">
        <img src={NotFoundImage} alt="not found" className="mx-auto w-1/2" />
        <h3 className="text-center text-accent">
          We can't find page you are looking for
        </h3>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound
