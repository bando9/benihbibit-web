import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { formattedCurrency } from "@/utils/common"
import { $api } from "@/modules/products/api"
import {
  RiAddLine,
  RiArrowDropRightLine,
  RiShieldLine,
  RiShoppingCartLine,
  RiSubtractLine,
  RiTruckLine,
} from "@remixicon/react"
import { useState } from "react"
import { useParams } from "react-router"

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)

  const { slug } = useParams()

  if (!slug) return console.log("slug not found")

  const {
    data: product,
    error,
    isLoading,
  } = $api.useQuery("get", `/products/{slug}`, {
    params: {
      path: { slug: slug },
    },
  })

  const { data: products } = $api.useQuery("get", `/products`, {
    params: {
      query: {
        page: 1,
        pageSize: 4,
      },
    },
  })

  if (isLoading || !product) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error}</span>
  }

  return (
    <div className="h-min-screen mx-15 pt-5 pb-20">
      <div className="container">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl bg-secondary shadow-sm">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {product.name}
              </h1>
            </div>
            <p className="text-2xl font-bold text-primary tabular-nums md:text-3xl">
              {formattedCurrency(product.price)}
            </p>

            <div className="flex items-center gap-2">
              {product.stockQuantity <= 0 ? (
                <>
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />
                  <span className="text-sm font-medium text-red-400">
                    Out of Stock
                  </span>
                </>
              ) : (
                <>
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                  <span className="text-sm font-medium text-primary">
                    In Stock
                  </span>
                  <span className="text-sm text-muted-foreground">
                    — {product.stockQuantity} units available
                  </span>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: RiTruckLine,
                  label: "Free Shipping",
                  desc: "Orders over Rp100K",
                },
                {
                  icon: RiShieldLine,
                  label: "Quality Guarantee",
                  desc: "100% organic certified",
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl bg-secondary/60 p-3"
                >
                  <Icon size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {label}
                    </p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
              <div className="flex items-center overflow-hidden rounded-full border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="cursor-pointer px-4 py-2.5 transition-colors hover:bg-secondary active:scale-95"
                >
                  <RiSubtractLine size={16} />
                </button>
                <span className="w-12 text-center font-semibold text-foreground tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="cursor-pointer px-4 py-2.5 transition-colors hover:bg-secondary active:scale-95"
                >
                  <RiAddLine size={16} />
                </button>
              </div>

              <div className="flex w-full flex-1 gap-3 sm:w-auto">
                <Button className="h-11 flex-1 cursor-pointer gap-2 rounded-full">
                  <RiShoppingCartLine size={16} /> Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="h-11 flex-1 cursor-pointer rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold">Description</h2>
              <p className="leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Related Products
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {products?.map((product) => (
              <a
                key={product.name}
                href={`/product/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-4">
                  <h3 className="text-sm font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-bold text-primary tabular-nums">
                      {formattedCurrency(product.price)}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      View <RiArrowDropRightLine size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
