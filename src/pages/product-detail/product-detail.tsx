import { $api } from "@/modules/products/api"
import { useState, type ChangeEvent } from "react"
import { useParams } from "react-router"
import ProductBreadcrumb from "./components/product-breadcrumb"
import ProductInfo from "./components/product-info"
import ProductCard from "@/components/shared/product-card"

const ProductDetail = () => {
  const [quantity, setQuantity] = useState<number | string>(1)

  const { slug } = useParams<{ slug: string }>()

  if (!slug) return null

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

  const maxQuantity = product?.stockQuantity

  function subQuantity() {
    const currentQuantity = Number(quantity)
    if (currentQuantity > 1) {
      setQuantity(currentQuantity - 1)
    }
  }

  function addQuantity() {
    const currentQuantity = Number(quantity)

    if (currentQuantity < maxQuantity) {
      setQuantity(currentQuantity + 1)
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    if (value === "") {
      setQuantity("")
      return
    }

    const inputValue = Number(value)
    if (!isNaN(inputValue)) {
      setQuantity(inputValue)
    }
  }

  function handleInputBlur() {
    if (quantity == "" || Number(quantity) < 1) {
      setQuantity(1)
    }
  }

  return (
    <div className="h-min-screen mx-15 pt-5 pb-20">
      <div className="container">
        <ProductBreadcrumb name={product.name} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl bg-secondary shadow-sm">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <ProductInfo
            product={product}
            subQuantity={subQuantity}
            addQuantity={addQuantity}
            quantity={quantity}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
        </div>

        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Related Products
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
