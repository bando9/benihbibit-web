import { formattedCurrency } from "@/utils/common"
import type { ProductsType } from "./product-featured"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"

type ProductType = ProductsType[number]

interface ProductTypeProps {
  product: ProductType
}

function ProductItem({ product }: ProductTypeProps) {
  return (
    <li>
      <Link to={`/product/${product.slug}`}>
        <Card className="w-full max-w-sm transform cursor-pointer duration-200 hover:scale-105 hover:shadow-md">
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
          </CardContent>
        </Card>
      </Link>
    </li>
  )
}

export default ProductItem
