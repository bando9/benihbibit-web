import FeatureServices from "@/modules/home/components/feature-services"
import { HomeCarousel } from "@/modules/home/components/home-carousel"
import ProductFeatured from "@/modules/home/components/product-featured"
import { $api } from "@/modules/products/api"

export function Home() {
  const { data: products, error, isLoading } = $api.useQuery("get", "/products")

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <>
      <HomeCarousel />
      <ProductFeatured products={products} />
      <FeatureServices />
    </>
  )
}
