import { CarouselHeader } from "@/components/carousel-header"
import Products from "@/components/products"
import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"

function Home() {
  return (
    <>
      <Navbar />
      <CarouselHeader />
      <Products />
      <Footer />
    </>
  )
}
export default Home
