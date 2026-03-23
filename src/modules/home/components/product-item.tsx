import { formattedCurrency } from "@/utils/common"
import type { ProductsType } from "./product-featured"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProductType = ProductsType[number]

interface ProductTypeProps {
  product: ProductType
}

function ProductItem({ product }: ProductTypeProps) {
  return (
    <li>
      <Card className="w-full max-w-sm">
        <CardContent>
          <img
            src={product.imageUrl}
            className="rounded-xl"
            alt={product.name}
          />
          <CardTitle className="mt-2"> {product.name} </CardTitle>
          <CardDescription>
            <p>{formattedCurrency(product.price)}</p>
          </CardDescription>
          <Button type="submit" className="mt-3 w-full cursor-pointer">
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </li>
  )
}

export default ProductItem
