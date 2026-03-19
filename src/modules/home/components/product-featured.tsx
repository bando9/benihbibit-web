import { formattedCurrency } from "@/utils/common"
import { $api } from "@/modules/products/api"

export default function ProductFeatured() {
  const { data: products, error, isLoading } = $api.useQuery("get", "/products")

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <div className="mx-15 mt-10">
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
