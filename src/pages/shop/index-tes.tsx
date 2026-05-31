import { RiLeafFill } from "@remixicon/react"

function ProductsTes() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900 antialiased">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary"
          >
            <RiLeafFill />
            <span>BenihBibit</span>
          </a>
          <div className="hidden flex-1 items-center justify-center px-10 md:flex">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Cari benih sayur, buah, atau herbal..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pr-10 pl-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
              />
              <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-primary">
                <i className="ri-search-line"></i>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-gray-600 transition-colors hover:text-primary">
              <i className="ri-shopping-cart-2-line text-2xl"></i>
              <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button className="hidden text-gray-600 transition-colors hover:text-primary sm:block">
              <i className="ri-user-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-primary">
            Beranda
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="/products" className="hover:text-primary">
            Semua Produk
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <a href="#" className="hover:text-primary">
            Sayur Daun
          </a>
          <i className="ri-arrow-right-s-line"></i>
          <span className="font-medium text-gray-900">Benih Daun Kelor</span>
        </nav>

        <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1629837920337-142f36bc40d2?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="Benih Kelor"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <button className="aspect-square overflow-hidden rounded-lg border-2 border-primary ring-1 ring-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1629837920337-142f36bc40d2?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Thumb 1"
                    className="h-full w-full object-cover"
                  />
                </button>
                <button className="aspect-square overflow-hidden rounded-lg ring-1 ring-gray-200 transition-opacity hover:opacity-75">
                  <img
                    src="https://images.unsplash.com/photo-1518972554767-46cb5b08ecb2?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Thumb 2"
                    className="h-full w-full object-cover"
                  />
                </button>
                <button className="aspect-square overflow-hidden rounded-lg ring-1 ring-gray-200 transition-opacity hover:opacity-75">
                  <img
                    src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Thumb 3"
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <span className="mb-2 inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  Terlaris
                </span>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  Benih Daun Kelor Organik Unggul (Moringa)
                </h1>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                    <span className="ml-1 font-medium text-gray-700">4.8</span>
                  </div>
                  <span className="h-4 w-px bg-gray-300"></span>
                  <span>Terjual 1.2rb+</span>
                </div>
              </div>

              <div className="mb-6 rounded-xl bg-gray-50 p-4 sm:p-6">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-extrabold text-primary sm:text-4xl">
                    Rp 15.000
                  </span>
                  <span className="mb-1 text-sm text-gray-500 line-through">
                    Rp 20.000
                  </span>
                  <span className="mb-1 rounded bg-red-100 px-1.5 py-0.5 text-xs font-bold text-red-600">
                    Diskon 25%
                  </span>
                </div>
              </div>

              <div className="mb-8 flex items-center gap-4">
                <span className="w-16 font-medium text-gray-700">Jumlah</span>
                <div className="flex items-center rounded-md border focus-within:ring-1 focus-within:ring-primary">
                  <button className="flex h-10 w-10 items-center justify-center text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                    <i className="ri-subtract-line"></i>
                  </button>

                  <input
                    type="number"
                    value="1"
                    className="h-10 w-16 appearance-none border-0 text-center font-semibold text-gray-900 tabular-nums focus:ring-0 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button className="flex h-10 w-10 items-center justify-center text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                    <i className="ri-add-line"></i>
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  Sisa stok: <span className="font-bold text-gray-700">45</span>
                </span>
              </div>

              <div className="mb-6 flex items-center justify-between border-t pt-4">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-xl font-bold text-gray-900">
                  Rp 15.000
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-green-50 px-6 py-3 font-semibold text-primary transition-colors hover:bg-green-100">
                  <i className="ri-shopping-cart-add-line text-xl"></i>
                  Masukkan Keranjang
                </button>
                <button className="hover:bg-primary-hover flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-md shadow-green-200 transition-colors">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="border-b">
            <nav className="-mb-px flex gap-6 sm:gap-8">
              <a
                href="#"
                className="border-b-2 border-primary px-1 py-4 font-medium text-primary"
              >
                Detail Produk
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent px-1 py-4 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Panduan Tanam
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent px-1 py-4 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Ulasan (120)
              </a>
            </nav>
          </div>

          <div className="prose prose-green mt-6 max-w-none text-gray-600">
            <p>
              Benih Kelor (Moringa oleifera) kami merupakan benih organik
              pilihan unggul yang sangat mudah tumbuh di iklim tropis. Daun
              kelor terkenal sebagai "Superfood" karena kandungan gizinya yang
              sangat tinggi, kaya akan vitamin A, vitamin C, kalsium, dan zat
              besi.
            </p>

            <h4 className="mt-6 mb-2 font-bold text-gray-900">
              Spesifikasi Benih:
            </h4>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Isi per kemasan:</strong> ± 50 Biji
              </li>
              <li>
                <strong>Daya Kecambah:</strong> 85% - 90%
              </li>
              <li>
                <strong>Waktu Berkecambah:</strong> 5 - 12 Hari
              </li>
              <li>
                <strong>Umur Panen (Daun):</strong> 3 - 4 Bulan setelah tanam
              </li>
              <li>
                <strong>Rekomendasi Dataran:</strong> Rendah - Menengah (Sangat
                tahan cuaca panas)
              </li>
            </ul>

            <p className="mt-4 text-sm text-gray-500 italic">
              *Ketahanan penyakit, umur panen, bobot dan potensi hasil
              tergantung pada lingkungan dan perlakuan budidayanya.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Pilihan Terkait Untukmu
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1518972554767-46cb5b08ecb2?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Benih Katuk"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 flex-1 text-sm font-medium text-gray-900 sm:text-base">
                  Benih Sayur Katuk Cepat Panen
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    Rp 10.000
                  </span>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-primary">
                  <i className="ri-shopping-cart-2-line"></i> Keranjang
                </button>
              </div>
            </div>

            <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1592500305630-419daaf5342a?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Polibag"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 flex-1 text-sm font-medium text-gray-900 sm:text-base">
                  Polybag Ukuran Sedang 20x20 (Isi 50)
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    Rp 25.000
                  </span>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-primary">
                  <i className="ri-shopping-cart-2-line"></i> Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t bg-white pt-12 text-sm text-gray-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <a
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-primary"
              >
                <i className="ri-leaf-fill"></i>
                <span>BenihBibit</span>
              </a>
              <p className="mt-4">
                Pusat benih tanaman terbaik dan termurah untuk menemani hobi
                berkebunmu di rumah.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Bantuan</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-primary">
                    Cara Belanja
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Panduan Tanam
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Lacak Pesanan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Kontak Kami</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <i className="ri-whatsapp-line mr-2"></i> +62 812-3456-7890
                </li>
                <li>
                  <i className="ri-mail-line mr-2"></i> hello@benihbibit.com
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t py-6 text-center">
            <p>&copy; 2026 BenihBibit. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProductsTes
