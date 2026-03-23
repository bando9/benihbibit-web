import FeatureServices from "@/modules/home/components/feature-services"
import { HomeCarousel } from "@/modules/home/components/home-carousel"
import ProductFeatured from "@/modules/home/components/product-featured"
import { $api } from "@/modules/products/api"

function handleNextPage() {
  return console.log("button next page")
}

export function Home() {
  const {
    data: products,
    error,
    isLoading,
  } = $api.useQuery("get", `/products`, {
    params: {
      query: {
        page: 3,
        pageSize: 8,
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

      <ProductFeatured products={products} handleNextPage={handleNextPage} />

      <FeatureServices />
    </div>
  )
}
