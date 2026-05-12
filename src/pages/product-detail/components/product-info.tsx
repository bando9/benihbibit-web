import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/modules/auth/hooks"
import { $api } from "@/modules/products/api"
import type { ProductType } from "@/types"
import { formattedCurrency } from "@/utils/common"
import {
  RiAddLine,
  RiShieldLine,
  RiShoppingCartLine,
  RiSubtractLine,
  RiTruckLine,
} from "@remixicon/react"
import { toast } from "sonner"

interface ProductDetailProps {
  product: ProductType
  subQuantity: () => void
  addQuantity: () => void
  quantity: number
}

function ProductInfo({
  product,
  subQuantity,
  addQuantity,
  quantity,
}: ProductDetailProps) {
  const { token } = useAuth()

  const { mutate } = $api.useMutation("post", "/cart/items")

  function handleAddToCart() {
    mutate(
      {
        body: { quantity: quantity, productId: product.id },
        headers: { Authorization: `Bearer ${token}` },
      },
      {
        onSuccess: () => {
          toast.success("produk berhasil ditambahkan ke keranjang", {
            position: "top-center",
          })
        },
        onError: () => {
          toast.error("Produk sudah ditambahkan maksimal stock", {
            position: "top-center",
          })
        },
      }
    )
  }

  return (
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
            <span className="text-sm font-medium text-primary">In Stock</span>
            <span className="text-sm text-muted-foreground">
              — {product.stockQuantity} pcs available
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
              <p className="text-sm font-medium text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5 flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
        <div className="flex items-center overflow-hidden rounded-full border border-border">
          <button
            onClick={subQuantity}
            className="cursor-pointer px-4 py-2.5 transition-colors hover:bg-secondary active:scale-95"
          >
            <RiSubtractLine size={16} />
          </button>
          <Input
            className="w-12 border-0 text-center font-semibold text-foreground tabular-nums focus-visible:ring-0 focus-visible:ring-offset-0"
            value={quantity}
          />
          <button
            onClick={addQuantity}
            className={`cursor-pointer px-4 py-2.5 transition-colors hover:bg-secondary active:scale-95`}
          >
            <RiAddLine size={16} />
          </button>
        </div>

        <div className="flex w-full flex-1 gap-3 sm:w-auto">
          <Button
            onClick={handleAddToCart}
            className="h-11 flex-1 cursor-pointer gap-2 rounded-full"
          >
            <RiShoppingCartLine size={16} /> Add to Cart
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default ProductInfo
