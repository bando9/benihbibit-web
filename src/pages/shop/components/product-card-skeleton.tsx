import { Skeleton } from "@/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card p-0">
      {/* Skeleton Gambar */}
      <Skeleton className="h-52 w-full rounded-none" />

      <div className="flex flex-col gap-1.5 p-4">
        {/* Skeleton Nama Produk */}
        <Skeleton className="h-4 w-3/4" />

        {/* Skeleton Deskripsi */}
        <Skeleton className="h-3 w-full" />

        <div className="mt-2 flex items-center justify-between">
          {/* Skeleton Harga */}
          <Skeleton className="h-6 w-20" />

          {/* Skeleton Button Add */}
          <Skeleton className="h-7 w-16 rounded-full" />
        </div>
      </div>
    </div>
  )
}
