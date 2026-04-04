import type { paths } from "@/modules/products/schema/schema"
import { Link } from "react-router"

import { Button } from "@/components/ui/button"
import ProductList from "@/components/shared/product-list"

export type ProductsType =
  paths["/products"]["get"]["responses"][200]["content"]["application/json"]

interface ProductsTypeProps {
  products: ProductsType
}

export default function ProductFeatured({ products }: ProductsTypeProps) {
  return (
    <div className="mx-15">
      <div className="mb-5 flex justify-between">
        <h3 className="text-2xl font-semibold">Featured Products</h3>
      </div>

      <ProductList products={products} />

      <div className="mt-7 w-full text-center">
        <Link to="/shop">
          <Button className="w-3/4 cursor-pointer">View all products</Button>
        </Link>
      </div>
    </div>
  )
}
