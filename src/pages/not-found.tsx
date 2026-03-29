import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import NotFoundImage from "@/assets/not-found.gif"

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />

      <div className="flex flex-col items-center bg-[#999] px-15 pt-5 pb-10">
        <img src={NotFoundImage} alt="not found" className="w-1/2" />
        <h3 className="text-accent">We can't find page you are looking for</h3>
        <a href="/" className="text-accent underline hover:text-[#fbe5b5]">
          Return to Home
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound
