import { Link } from "react-router"
import {
  RiShieldCheckLine,
  RiWallet3Line,
  RiArrowLeftLine,
} from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
      <div className="space-y-10 lg:col-span-8">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <RiArrowLeftLine size={16} /> Kembali ke Keranjang
        </Link>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              1
            </div>
            <h2 className="text-xl font-bold">Informasi Pengiriman</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nama Depan</Label>
              <Input id="firstName" placeholder="Bando" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nama Belakang</Label>
              <Input id="lastName" placeholder="Mega" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Alamat Lengkap</Label>
              <Input
                id="address"
                placeholder="Nama jalan, nomor rumah, RT/RW"
              />
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              2
            </div>
            <h2 className="text-xl font-bold">Metode Pengiriman</h2>
          </div>

          <RadioGroup
            defaultValue="reguler"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <Label
              htmlFor="reg"
              className="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all hover:bg-muted/50 has-checked:border-primary has-checked:bg-primary/5"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="reguler" id="reg" />
                <div>
                  <p className="text-sm font-semibold">Reguler</p>
                  <p className="text-xs text-muted-foreground">
                    3-5 Hari Kerja
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold">Rp 10.000</span>
            </Label>

            <Label
              htmlFor="exp"
              className="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all hover:bg-muted/50 has-checked:border-primary has-checked:bg-primary/5"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="express" id="exp" />
                <div>
                  <p className="text-sm font-semibold">Express</p>
                  <p className="text-xs text-muted-foreground">
                    1-2 Hari Kerja
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold">Rp 25.000</span>
            </Label>
          </RadioGroup>
        </section>

        <Separator />

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              3
            </div>
            <h2 className="text-xl font-bold">Metode Pembayaran</h2>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-muted/50 p-4">
            <RiWallet3Line className="text-muted-foreground" size={24} />
            <p className="text-sm text-muted-foreground">
              Instruksi pembayaran akan muncul setelah Anda menekan tombol
              "Selesaikan Pesanan".
            </p>
          </div>
        </section>
      </div>

      <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-4">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-bold">Ringkasan Pesanan</h3>

          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Kertas Benih Sayuran x2
              </span>
              <span className="font-medium">Rp 50.000</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Pensil Tanam Sprout x1
              </span>
              <span className="font-medium">Rp 15.000</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">Rp 65.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ongkos Kirim</span>
              <span className="font-medium">Rp 10.000</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-bold">
              <span>Total Tagihan</span>
              <span className="text-primary">Rp 75.000</span>
            </div>
          </div>

          <Button className="mt-6 h-12 w-full text-base font-bold shadow-lg shadow-primary/20">
            Selesaikan Pesanan
          </Button>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
            <RiShieldCheckLine className="text-emerald-500" size={16} />
            Pembayaran Aman & Terenkripsi
          </div>
        </div>
      </aside>
    </div>
  )
}
