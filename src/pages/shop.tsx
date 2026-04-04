import { $api } from "@/modules/products/api"

import { Button } from "@/components/ui/button"
import { RiCloseLine, RiSearch2Line } from "@remixicon/react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { paths } from "@/modules/products/schema/schema"
import { useState } from "react"
import ProductEmpty from "@/modules/products/components/product-empty"
import ProductCard from "@/modules/shared/product-card"

export type ProductQueryParamsType =
  paths["/products"]["get"]["parameters"]["query"]

export type ProductSortBy = NonNullable<ProductQueryParamsType>["sortBy"]

function Shop() {
  const [sortBy, setSortBy] = useState<ProductSortBy>("createdAt")

  const page = 1
  const pageSize = 9

  const {
    data: products,
    error,
    isLoading,
  } = $api.useQuery("get", "/products", {
    params: {
      query: {
        page: page,
        pageSize: pageSize,
        sortBy: sortBy,
        sortOrder: "desc",
      },
    },
  })

  if (!products) return <div>No data Searching</div>

  if (error) {
    return <span>Error: {error}</span>
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  const resetFilters = () => {
    setSortBy("createdAt")
  }
  const FilterPanel = ({ onClose }: { onClose?: () => void }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground lg:hidden"
          >
            <RiCloseLine size={20} />
          </button>
        )}
      </div>

      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Search
        </label>
        <div className="relative">
          <RiSearch2Line
            size={16}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search products..."
            // value={searchQuery}
            // onChange={(e) => {
            //   setSearchQuery(e.target.value)
            //   setCurrentPage(1)
            // }}
            className="pl-9"
          />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Price Range
        </label>
        <div className="flex gap-2">
          <Input
            placeholder="Min"
            type="number"
            // value={minPrice}
            // onChange={(e) => {
            //   setMinPrice(e.target.value)
            //   setCurrentPage(1)
            // }}
          />
          <span className="self-center text-muted-foreground">–</span>
          <Input
            placeholder="Max"
            type="number"
            // value={maxPrice}
            // onChange={(e) => {
            //   setMaxPrice(e.target.value)
            //   setCurrentPage(1)
            // }}
          />
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Availability
        </label>
        <div className="space-y-1.5">
          {(
            [
              ["all", "All"],
              ["in-stock", "In Stock"],
              ["out-of-stock", "Out of Stock"],
            ] as const
          ).map(([val, label]) => (
            <Button
              variant="outline"
              key={val}
              // onClick={() => {
              //   setAvailability(val)
              //   setCurrentPage(1)
              // }}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors`}
            >
              {/* ${
                availability === val
                  ? "bg-primary font-medium text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              } */}
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Sort By
        </label>
        <Select
          value={sortBy}
          onValueChange={(v) => setSortBy(v as ProductSortBy)}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="createdAt">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-[#eef6f1] py-12 md:py-16">
        <div className="container text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Shop Plants & Seeds 🌿
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Browse our collection of high-quality seeds and gardening products
          </p>
        </div>
      </section>
      <main className="mx-15 flex-1">
        <section className="container py-8 md:py-12">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
                <FilterPanel />
              </div>
            </aside>

            {/* Main Content */}
            <div className="min-w-0 flex-1">
              {/* Top Bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-medium text-foreground">
                    {products.length === 0 ? 0 : (page - 1) * pageSize + 1}–
                    {Math.min(page * pageSize, products.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-foreground">
                    {products.length}
                  </span>
                  <span className="text-xs font-medium text-red-600">
                    {" "}
                    (harusnya total products diambil dari header){" "}
                  </span>
                  products
                </p>
              </div>

              {products?.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {products?.map((product) => (
                    <ProductCard product={product} showAddToCart={true} />
                  ))}
                </div>
              ) : (
                <ProductEmpty resetFilters={resetFilters} />
              )}

              {/* Pagination */}
              {/* {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === i + 1
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-foreground hover:bg-secondary"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Shop
