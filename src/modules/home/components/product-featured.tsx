import { formattedCurrency } from "@/utils/common"
import { $api } from "@/modules/products/api"
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiShoppingBasketLine,
} from "@remixicon/react"

export default function ProductFeatured() {
  const { data: products, error, isLoading } = $api.useQuery("get", "/products")

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <div className="mx-15 my-10">
      <div className="mb-3 flex justify-between">
        <h3 className="text-2xl font-semibold">Featured Products</h3>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex h-8 cursor-pointer items-center rounded-sm border-2 border-accent-foreground">
            <RiArrowLeftLine />
          </div>
          <div className="flex h-8 cursor-pointer items-center rounded-sm border-2 border-primary bg-primary text-white">
            <RiArrowRightLine />
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-5 gap-5">
        {products.map((product) => (
          <li key={product.id}>
            <div className="overflow-hidden rounded-xl bg-primary">
              <img src={product.imageUrl} alt={product.name} />
              <div className="flex h-20 items-center justify-between p-3">
                <div className="text-sm text-accent">
                  <p>{product.name}</p>
                  <p className="text-base font-bold">
                    {formattedCurrency(product.price)}
                  </p>
                </div>
                <div className="cursor-pointer rounded-full bg-accent p-1 hover:bg-chart-1">
                  <RiShoppingBasketLine />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
