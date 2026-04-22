import { $api } from "@/modules/products/api"
import { HomeCarousel } from "./components/home-carousel"
import ProductFeatured from "./components/product-featured"
import FeatureServices from "./components/feature-services"
import ProductFeaturedSkeleton from "./components/product-featured-skeleton"

export function Home() {
  const pageSize = 16
  const {
    data: products,
    error,
    isLoading,
  } = $api.useQuery("get", `/products`, {
    params: {
      query: {
        page: 1,
        pageSize,
      },
    },
  })

  if (error) {
    return <div className="p-4 text-red-500">Gagal memuat produk.</div>
  }

  return (
    <div className="space-y-28">
      <HomeCarousel />

      {isLoading || !products ? (
        <ProductFeaturedSkeleton count={pageSize} />
      ) : (
        <ProductFeatured products={products} />
      )}

      <FeatureServices />
    </div>
  )
}
