import { $api } from "@/modules/common/api"

export default function Products() {
  const { data: products, error, isLoading } = $api.useQuery("get", "/products")

  if (isLoading || !products) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  const productsList = products.data

  return (
    <div>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>{product.name} </li>
        ))}
      </ul>
    </div>
  )
}
