import FeatureServices from "@/modules/home/components/feature-services"
import { HomeCarousel } from "@/modules/home/components/home-carousel"
import ProductFeatured from "@/modules/home/components/product-featured"

export function Home() {
  return (
    <>
      <HomeCarousel />
      <ProductFeatured />
      <FeatureServices />
    </>
  )
}
