import { RiShoppingCartLine } from "@remixicon/react"
import { Link } from "react-router"

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted/50">
        <RiShoppingCartLine size={48} className="text-muted-foreground/50" />
      </div>

      <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
        Keranjang Belanjamu Kosong
      </h3>
      <p className="mb-8 max-w-sm text-sm text-muted-foreground">
        Sepertinya kamu belum memasukkan benih apa pun ke keranjang. Yuk,
        temukan produk menarik di toko kami!
      </p>

      <Link
        to="/products"
        className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none active:scale-95"
      >
        Mulai Belanja Sekarang
      </Link>
    </div>
  )
}

export default EmptyCart
