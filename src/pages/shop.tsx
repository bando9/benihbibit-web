import { Slider } from "@/components/ui/slider"
import { RiEqualizer2Line, RiShoppingBasketLine } from "@remixicon/react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { $api } from "@/modules/products/api"
import { formattedCurrency } from "@/utils/common"
import ProductSkeleton from "@/modules/products/components/product-skeleton"

function Shop() {
  const {
    data: products,
    error,
    isLoading,
  } = $api.useQuery("get", "/products", {
    query: {
      page: 1,
      pageSize: 8,
      sortBy: "price",
      sortOrder: "desc",
    },
  })

  console.log(products)

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <>
      <div className="mx-15 mb-5 flex items-center justify-between">
        <div className="flex rounded-2xl bg-primary px-3 py-1 text-accent">
          <h3>Filter</h3>
          <RiEqualizer2Line />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p>
          <span className="font-bold">52</span> result found
        </p>
      </div>

      <div className="flex flex-row">
        <aside className="h-screen w-full max-w-70 border-e-2">
          <div className="ms-15 mt-10">
            <h3 className="text-xl font-semibold">Price</h3>
            <Slider
              defaultValue={[25, 50]}
              max={100}
              step={5}
              className="w-full max-w-50"
            />
          </div>
        </aside>
        <div className="ms-4 me-15 w-full">
          <ul className="grid grid-cols-4 gap-3">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => {
                  return (
                    <li key={i}>
                      <ProductSkeleton />
                    </li>
                  )
                })
              : products?.map((product) => (
                  <li key={product.id}>
                    <div className="overflow-hidden rounded-xl bg-primary">
                      <img src={product.imageUrl} alt={product.name} />
                      <div className="flex h-20 items-center justify-between p-3">
                        <div className="text-sm text-accent">
                          <p>{product.name}</p>
                          <p className="text-base font-bold">
                            {formattedCurrency(product.price)}
                          </p>
                        </div>
                        <div className="cursor-pointer rounded-full bg-accent p-1 hover:bg-chart-1">
                          <RiShoppingBasketLine />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Shop
