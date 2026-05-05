import { Card, CardContent } from "@/components/ui/card"
import type { CartItemProps } from "@/types"
import { formattedCurrency } from "@/utils/common"
import { RiDeleteBinLine } from "@remixicon/react"

function CartItemCard({ item }: CartItemProps) {
  return (
    <Card key={item.id} className="overflow-hidden">
      <CardContent className="flex items-center gap-4 p-4 sm:gap-6 sm:p-6">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted sm:h-24 sm:w-24">
          <img
            src={item.product.imageUrl}
            alt={item.product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="line-clamp-2 font-semibold text-foreground">
              {item.product.name}
            </h3>
            <p className="font-bold text-primary">
              {formattedCurrency(item.product.price)}
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center rounded-md border">
              <button className="cursor-pointer px-3 py-1 transition-colors hover:bg-muted">
                -
              </button>
              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>
              <button className="cursor-pointer px-3 py-1 transition-colors hover:bg-muted">
                +
              </button>
            </div>
            <button className="cursor-pointer text-muted-foreground transition-colors hover:text-destructive">
              <RiDeleteBinLine size={20} />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CartItemCard
