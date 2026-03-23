import { formattedCurrency } from "@/utils/common"
import { RiShoppingBasketLine } from "@remixicon/react"
import type { ProductsType } from "./product-featured"

type ProductType = ProductsType[number]

interface ProductTypeProps {
  product: ProductType
}

function ProductItem({ product }: ProductTypeProps) {
  return (
    <div>
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
    </div>
  )
}

export default ProductItem
