import { formattedCurrency } from "@/lib/common"
import { $api } from "@/modules/common/api"

export default function Products() {
  const { data: products, error, isLoading } = $api.useQuery("get", "/products")

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <div className="mx-15 mt-10">
      <ul className="grid grid-cols-4 gap-4">
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
