import { formattedCurrency } from "@/utils/common"
import { $api } from "@/modules/products/api"
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"

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
        <div className="flex items-center justify-center space-x-1">
          <div className="flex h-8 cursor-pointer items-center rounded-sm border-2 border-accent-foreground">
            <RiArrowLeftLine />
          </div>
          <div className="flex h-8 cursor-pointer items-center rounded-sm border border-accent bg-primary text-white">
            <RiArrowRightLine />
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-5 gap-5">
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.name}</p>
              <p>{formattedCurrency(product.price)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
