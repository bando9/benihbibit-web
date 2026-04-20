import { useNavigate } from "react-router"
import { RiDeleteBinLine, RiArrowRightLine, RiLeafLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formattedCurrency } from "@/utils/common"

const cartItems = [
  {
    id: 1,
    name: "Kertas Benih Sayuran (Isi 10)",
    price: 25000,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392746?w=200&q=80",
  },
  {
    id: 2,
    name: "Pensil Tanam Sprout",
    price: 15000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200&q=80",
  },
  {
    id: 2,
    name: "Pensil Tanam Sprout",
    price: 15000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200&q=80",
  },
  {
    id: 2,
    name: "Pensil Tanam Sprout",
    price: 15000,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200&q=80",
  },
]

export function Cart() {
  const navigate = useNavigate()

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Keranjang Belanja</h1>

      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="w-full space-y-4 lg:flex-1">
          {cartItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="flex items-center gap-4 p-4 sm:gap-6 sm:p-6">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted sm:h-24 sm:w-24">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="line-clamp-2 font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="font-bold text-primary">
                      {formattedCurrency(item.price)}
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
          ))}
        </div>

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
              <div className="flex justify-between">
                <span className="text-muted-foreground">Diskon</span>
                <span className="font-medium text-emerald-600">-Rp 0</span>
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
              className="h-12 w-full text-base font-bold"
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
                Terima kasih telah memilih produk ramah lingkungan. Paketmu akan
                dikemas 100% bebas plastik!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
