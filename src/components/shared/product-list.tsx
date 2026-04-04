import ProductCard from "@/components/shared/product-card"
import type { ProductsType } from "@/pages/home/components/product-featured"

interface ProductsTypeProps {
  products: ProductsType
  showAddToCart?: boolean
}

function ProductList({ products, showAddToCart }: ProductsTypeProps) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          showAddToCart={showAddToCart}
        />
      ))}
    </>
  )
}

export default ProductList
