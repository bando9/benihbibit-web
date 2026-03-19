import { CarouselHeader } from "@/modules/home/components/carousel-header"
import ProductFeatured from "@/modules/home/components/product-featured"
import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"

function Home() {
  return (
    <>
      <Navbar />
      <CarouselHeader />
      <ProductFeatured />
      <Footer />
    </>
  )
}
export default Home
