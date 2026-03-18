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
    <div>
      tes
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <img src={product.imageUrl} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}
