import FeatureServices from "@/modules/home/components/feature-services"
import { HomeCarousel } from "@/modules/home/components/home-carousel"
import ProductFeatured from "@/modules/home/components/product-featured"
import { $api } from "@/modules/products/api"
import { useState } from "react"

export function Home() {
  const [page, setPage] = useState(1)
  const pageSize = 8

  const {
    data: products,
    error,
    isLoading,
  } = $api.useQuery("get", `/products`, {
    params: {
      query: {
        page: page,
        pageSize: pageSize,
      },
    },
  })

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  function handleNextPage() {
    return setPage((prevCount) => {
      if (prevCount >= 4) return 1

      return prevCount + 1
    })
  }

  function handlePrevPage() {
    setPage((prevCount) => {
      if (prevCount <= 0 || prevCount >= 4) return 1
      return prevCount - 1
    })
  }

  return (
    <div className="space-y-28">
      <HomeCarousel />

      <ProductFeatured
        products={products}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />

      <FeatureServices />
    </div>
  )
}
