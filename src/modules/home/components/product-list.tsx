import type { ProductsType } from "./product-featured"
import ProductItem from "./product-item"

interface ProductsTypeProps {
  products: ProductsType
}

function ProductList({ products }: ProductsTypeProps) {
  return (
    <ul className="grid grid-cols-4 gap-7">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </ul>
  )
}

export default ProductList
