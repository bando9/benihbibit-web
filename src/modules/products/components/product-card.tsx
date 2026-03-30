import type { ProductTypeProps } from "@/modules/home/components/product-item"
import { formattedCurrency } from "@/utils/common"
import { RiShoppingCartLine } from "@remixicon/react"
import { Link } from "react-router"

function ProductCard({ product }: ProductTypeProps) {
  return (
    <Link
      key={product.id}
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
          <span className="absolute top-3 right-3 rounded-full bg-destructive px-2.5 py-1 text-xs font-medium text-accent">
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
  )
}

export default ProductCard
