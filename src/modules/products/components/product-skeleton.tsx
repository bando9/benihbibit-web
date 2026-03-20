import { Skeleton } from "@/components/ui/skeleton"

function ProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-200">
      <Skeleton className="aspect-square w-full" />
      <div className="flex h-20 items-center justify-between p-3">
        <div className="space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  )
}

export default ProductSkeleton
