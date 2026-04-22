import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import ProductListSkeleton from "@/components/shared/product-list-skeleton"

interface ProductsTypeProps {
  count?: number
}

export default function ProductFeaturedSkeleton({ count }: ProductsTypeProps) {
  return (
    <div className="mx-15">
      <div className="mb-5 flex justify-between">
        <h3 className="text-2xl font-semibold">Featured Products</h3>
      </div>

      <div className="grid grid-cols-4 gap-7">
        <ProductListSkeleton count={count} />
      </div>

      <div className="mt-7 w-full text-center">
        <Link to="/products">
          <Button className="w-3/4 cursor-pointer">View all products</Button>
        </Link>
      </div>
    </div>
  )
}
