import type { ProductsType } from "@/pages/home/components/product-featured"

interface ProductToolbarProps {
  products: ProductsType
  page: number
  pageSize: number
  total: string | null
}

function ProductToolbar({
  products,
  page,
  pageSize,
  total,
}: ProductToolbarProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-medium text-foreground">
          {products.length === 0 ? 0 : (page - 1) * pageSize + 1}–
          {page * pageSize}
        </span>{" "}
        of <span className="font-medium text-foreground">{total} </span>
        products
      </p>
    </div>
  )
}

export default ProductToolbar
