import ProductCard from "@/components/shared/product-card"
import type { ProductsType } from "./product-featured"

interface ProductsTypeProps {
  products: ProductsType
}

function ProductList({ products }: ProductsTypeProps) {
  return (
    <ul className="grid grid-cols-4 gap-7">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  )
}

export default ProductList
