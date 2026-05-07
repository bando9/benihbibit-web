import { useNavigate } from "react-router"
import { RiArrowRightLine, RiLeafLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formattedCurrency } from "@/utils/common"
import { $api } from "@/modules/products/api"
import { useAuth } from "@/modules/auth/hooks"
import EmptyCart from "./components/empty-cart"
import CartItemList from "./components/cart-item-list"

export function Cart() {
  const navigate = useNavigate()
  const { token } = useAuth()

  const {
    data: cartUser,
    isLoading,
    error,
  } = $api.useQuery("get", "/cart", {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!cartUser) {
    return <>Cart not found</>
  }

  const cartItems = cartUser?.items

  if (isLoading) {
    return <>loading...</>
  }

  if (error) {
    return <>error:${error}</>
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Keranjang Belanja</h1>

      {cartItems.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <CartItemList cartItems={cartItems} />

          <Card className="sticky top-24 w-full shrink-0 lg:w-95">
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-bold">Ringkasan Belanja</h2>

              <div className="mb-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Total Harga ({cartItems.length} barang)
                  </span>
                  <span className="font-medium">
                    {formattedCurrency(subtotal)}
                  </span>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="mb-6 flex items-center justify-between">
                <span className="text-base font-bold">Total Tagihan</span>
                <span className="text-xl font-bold text-primary">
                  {formattedCurrency(subtotal)}
                </span>
              </div>

              <Button
                className="h-12 w-full cursor-pointer text-base font-bold"
                onClick={() => navigate("/checkout")}
              >
                Lanjut ke Pembayaran{" "}
                <RiArrowRightLine className="ml-2" size={18} />
              </Button>

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-100 bg-emerald-50/50 p-3">
                <RiLeafLine
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={18}
                />
                <p className="text-xs leading-relaxed text-emerald-800">
                  Terima kasih telah memilih produk ramah lingkungan. Paketmu
                  akan dikemas 100% bebas plastik!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
