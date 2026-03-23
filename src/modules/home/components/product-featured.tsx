import type { paths } from "@/modules/products/schema/schema"
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"
import ProductList from "./product-list"

export type ProductsType =
  paths["/products"]["get"]["responses"][200]["content"]["application/json"]

interface ProductsTypeProps {
  products: ProductsType
}

export default function ProductFeatured({ products }: ProductsTypeProps) {
  return (
    <div className="m-15">
      <div className="mb-5 flex justify-between">
        <h3 className="text-2xl font-semibold">Featured Products</h3>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex h-8 cursor-pointer items-center rounded-sm border-2 border-accent-foreground">
            <RiArrowLeftLine />
          </div>
          <div className="flex h-8 cursor-pointer items-center rounded-sm border-2 border-primary bg-primary text-white">
            <RiArrowRightLine />
          </div>
        </div>
      </div>

      <ProductList products={products} />
    </div>
  )
}
