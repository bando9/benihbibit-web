import ProductEmpty from "@/modules/products/components/product-empty"
import { useQuery } from "@tanstack/react-query"
import { client } from "@/modules/products/api/fetch"
import ProductList from "@/components/shared/product-list"
import ShopHeader from "./components/shop-header"
import ProductToolbar from "./components/product-toolbar"
import ProductPagination from "./components/product-pagination"
import FilterPanel from "./components/filter-panel"
import { useSearchParams } from "react-router"

function Shop() {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get("page") || 1)
  const pageSize = 9

  const rawSort = searchParams.get("sortBy") || "newest"
  let sortBy = "createdAt"
  let sortOrder: "asc" | "desc" = "desc"
  const q = searchParams.get("q") || ""

  if (rawSort.includes("_")) {
    const [field, order] = rawSort.split("_")
    sortBy = field || "createdAt"
    sortOrder = order === "asc" ? "asc" : "desc"
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", page, sortBy, sortOrder, pageSize],
    queryFn: async () => {
      const { data, error, response } = await client.GET("/products", {
        params: {
          query: {
            page: page,
            pageSize: pageSize,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sortBy: sortBy as any,
            sortOrder: sortOrder,
            q: q,
          },
        },
      })

      if (error || !data) {
        throw new Error("Failed fetch data")
      }

      return {
        payload: data,
        headers: {
          total: response.headers.get("x-total"),
          totalPages: response.headers.get("x-total-pages"),
          contentTypes: response.headers.get("Content-Type"),
        },
      }
    },
  })

  if (!data) return <div>No data Searching</div>

  const products = data.payload
  const total = data.headers.total
  const totalPages = data.headers.totalPages

  if (error) {
    return <span>Error: {error.message}</span>
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  const resetFilters = () => {
    // setSortBy("createdAt")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="mx-15 flex-1">
        <section className="container py-8 md:py-12">
          <div className="flex gap-8">
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
                <FilterPanel />
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              {products?.length > 0 ? (
                <>
                  <ProductToolbar
                    products={products}
                    page={page}
                    pageSize={pageSize}
                    total={total}
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    <ProductList products={products} showAddToCart={false} />
                  </div>
                </>
              ) : (
                <ProductEmpty resetFilters={resetFilters} />
              )}

              <ProductPagination totalPages={totalPages} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Shop
