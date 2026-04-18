import { $api } from "@/modules/products/api"
import { HomeCarousel } from "./components/home-carousel"
import ProductFeatured from "./components/product-featured"
import FeatureServices from "./components/feature-services"

export function Home() {
  const {
    data: products,
    error,
    isLoading,
  } = $api.useQuery("get", `/products`, {
    params: {
      query: {
        page: 1,
        pageSize: 16,
      },
    },
  })

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <div className="space-y-28">
      <HomeCarousel />

      <ProductFeatured products={products} />

      <FeatureServices />
    </div>
  )
}
