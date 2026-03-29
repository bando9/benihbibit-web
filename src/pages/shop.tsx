// import { useState } from "react"
// import { Star, ShoppingCart, SlidersHorizontal, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import { $api } from "@/modules/products/api"
import { formattedCurrency } from "@/utils/common"
import {
  RiCloseLine,
  RiSearch2Line,
  RiShoppingCartLine,
} from "@remixicon/react"
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

// import productBasil from "@/assets/product-basil.jpg";
// import productSunflower from "@/assets/product-sunflower.jpg";
// import productTomato from "@/assets/product-tomato.jpg";
// import productLavender from "@/assets/product-lavender.jpg";
// import productTools from "@/assets/product-tools.jpg";
// import productMint from "@/assets/product-mint.jpg";
// import productChili from "@/assets/product-chili.jpg";
// import productFertilizer from "@/assets/product-fertilizer.jpg";

// type Category = "all" | "seeds" | "tools" | "plant-care";
// type SortOption = "newest" | "price-asc" | "price-desc";
// type Availability = "all" | "in-stock" | "out-of-stock";

// interface Product {
//   name: string;
//   price: number;
//   rating: number;
//   image: string;
//   category: Category;
//   inStock: boolean;
//   description: string;
// }

// const allProducts: Product[] = [
//   { name: "Sweet Basil Seeds", price: 24500, rating: 4.8, image: productBasil, category: "seeds", inStock: true, description: "Aromatic Italian basil for your kitchen garden." },
//   { name: "Sunflower Seed Pack", price: 32000, rating: 4.6, image: productSunflower, category: "seeds", inStock: true, description: "Bright, tall sunflowers that attract pollinators." },
//   { name: "Tomato Seedling", price: 18500, rating: 4.9, image: productTomato, category: "seeds", inStock: true, description: "Juicy organic tomato seeds, easy to grow." },
//   { name: "Lavender in Pot", price: 67000, rating: 4.7, image: productLavender, category: "plant-care", inStock: true, description: "Calming lavender plant, perfect for windowsills." },
//   { name: "Garden Tool Set", price: 145000, rating: 4.5, image: productTools, category: "tools", inStock: true, description: "5-piece stainless steel tool set for gardeners." },
//   { name: "Fresh Mint Plant", price: 28000, rating: 4.8, image: productMint, category: "seeds", inStock: false, description: "Fresh mint for teas, cocktails, and cooking." },
//   { name: "Chili Pepper Seeds", price: 19500, rating: 4.4, image: productChili, category: "seeds", inStock: true, description: "Hot chili pepper seeds — easy and rewarding." },
//   { name: "Organic Fertilizer", price: 53000, rating: 4.6, image: productFertilizer, category: "plant-care", inStock: true, description: "All-natural compost fertilizer for healthier plants." },
//   { name: "Rosemary Herb Seeds", price: 21000, rating: 4.7, image: productBasil, category: "seeds", inStock: true, description: "Fragrant rosemary for cooking and aromatherapy." },
//   { name: "Pruning Shears", price: 89000, rating: 4.3, image: productTools, category: "tools", inStock: true, description: "Sharp bypass pruning shears for clean cuts." },
//   { name: "Cactus Soil Mix", price: 35000, rating: 4.5, image: productFertilizer, category: "plant-care", inStock: false, description: "Well-draining soil mix for succulents & cacti." },
//   { name: "Marigold Flower Seeds", price: 15000, rating: 4.6, image: productSunflower, category: "seeds", inStock: true, description: "Vibrant marigolds to brighten any garden." },
// ];

// const ITEMS_PER_PAGE = 9;

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

  // const [category, setCategory] = useState<Category>("all");
  // const [availability, setAvailability] = useState<Availability>("all");
  // const [minPrice, setMinPrice] = useState("");
  // const [maxPrice, setMaxPrice] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  // const resetFilters = () => {
  //   setCategory("all");
  //   setSort("newest");
  //   setAvailability("all");
  //   setMinPrice("");
  //   setMaxPrice("");
  //   setSearchQuery("");
  //   setCurrentPage(1);
  // };

  // Filter
  // let filtered = allProducts.filter((p) => {
  //   if (category !== "all" && p.category !== category) return false;
  //   if (availability === "in-stock" && !p.inStock) return false;
  //   if (availability === "out-of-stock" && p.inStock) return false;
  //   if (minPrice && p.price < Number(minPrice)) return false;
  //   if (maxPrice && p.price > Number(maxPrice)) return false;
  //   if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
  //   return true;
  // });

  // Sort
  // if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  // else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  // const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  // const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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

      <Button
        variant="outline"
        className="w-full"
        // onClick={resetFilters}
      >
        Reset Filters
      </Button>
    </div>
  )

  return (
    <div className="mx-15 flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary/50 py-12 md:py-16">
          <div className="container text-center">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Shop Plants & Seeds 🌿
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Browse our collection of high-quality seeds and gardening products
            </p>
          </div>
        </section>

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
                    {/* {products.length} */}
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

                {/* <div className="flex items-center gap-3">
                  <div className="hidden w-48 sm:block">
                    <Select
                      value={sort}
                      onValueChange={(v) => setSort(v as SortOption)}
                    >
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-asc">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-desc">
                          Price: High to Low
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <SlidersHorizontal size={16} className="mr-1.5" /> Filters
                  </Button>
                </div> */}
              </div>

              {/* Product Grid */}
              {products?.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {products?.map((product) => (
                    <Link
                      key={product.name}
                      to={`/product/${product.slug}`}
                      className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {product.stockQuantity <= 0 && (
                          <span className="text-destructive-foreground absolute top-3 right-3 rounded-full bg-destructive px-2.5 py-1 text-xs font-medium">
                            Out of Stock
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5 p-4">
                        <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                          {product.name}
                        </h3>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          {product.description}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-base font-bold text-primary tabular-nums">
                            {formattedCurrency(product.price)}
                          </span>
                          <span
                            className="flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:shadow-md active:scale-95"
                            onClick={(e) => e.preventDefault()}
                          >
                            <RiShoppingCartLine size={13} /> Add
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-lg text-muted-foreground">
                    No products found.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try adjusting your filters.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    // onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
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

      {/* Mobile Filter Drawer */}
      {/* {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="animate-fade-in absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] overflow-y-auto bg-card p-6 shadow-2xl">
            <FilterPanel onClose={() => setMobileFiltersOpen(false)} />
          </div>
        </div>
      )} */}
    </div>
  )
}

export default Shop
