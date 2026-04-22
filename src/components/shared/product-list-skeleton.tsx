import ProductCardSkeleton from "./product-card-skeleton"

interface ProductsTypeProps {
  count?: number
  showAddToCart?: boolean
}

function ProductListSkeleton({ count = 8, showAddToCart }: ProductsTypeProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton
          key={`skeleton-${index}`}
          showAddToCart={showAddToCart}
        />
      ))}
    </>
  )
}

export default ProductListSkeleton
