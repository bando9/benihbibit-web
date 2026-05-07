import type { CartItem } from "@/types"
import CartItemCard from "./cart-item-card"

export interface CartItemsProps {
  cartItems: CartItem[]
}

function CartItemList({ cartItems }: CartItemsProps) {
  return (
    <div className="w-full space-y-4 lg:flex-1">
      {cartItems.map((item) => (
        <CartItemCard item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CartItemList
