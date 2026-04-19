import {
  RiMailLine,
  RiWhatsappLine,
  RiMapPinLine,
  RiSendPlaneLine,
} from "@remixicon/react"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Pesan berhasil terkirim! Kami akan segera membalasnya.")
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="mb-12 text-center md:mb-16">
        <h1 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
          Hubungi <span className="text-primary">Kami</span>
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Punya pertanyaan seputar produk kertas benih, kolaborasi, atau sekadar
          ingin menyapa? Jangan ragu untuk meninggalkan pesan. Kami siap
          membantu perjalanan hijaumu.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-8 rounded-2xl bg-muted/50 p-8 md:p-10">
          <div>
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Informasi Kontak
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <RiWhatsappLine size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <RiMailLine size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:hello@benihbunbun.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    hello@benihbunbun.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <RiMapPinLine size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Lokasi Studio</p>
                  <p className="text-muted-foreground">
                    Semarang, Jawa Tengah
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
          <h3 className="mb-6 text-xl font-bold text-foreground">
            Kirim Pesan
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Bando Mega"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="yourname@email.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Pesan
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tuliskan pertanyaan atau pesanmu di sini..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Kirim Pesan <RiSendPlaneLine size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
