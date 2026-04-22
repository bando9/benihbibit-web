import { Skeleton } from "../ui/skeleton"

interface ProductCardTypeProps {
  showAddToCart?: boolean
}

function ProductCardSkeleton({ showAddToCart }: ProductCardTypeProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Skeleton className="h-52 w-full rounded-none" />
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <Skeleton className="h-5 w-3/4" />

        <Skeleton className="h-4 w-full" />

        <div className="mt-2 flex items-center justify-between">
          <Skeleton className="h-6 w-1/3" />

          {showAddToCart && <Skeleton className="h-8 w-16 rounded-full" />}
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton
