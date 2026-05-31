import {
  RiArrowRightLine,
  RiDropLine,
  RiLeafFill,
  RiMailLine,
  RiMedicineBottleLine,
  RiPlantLine,
  RiSearchLine,
  RiSeedlingLine,
  RiShoppingCart2Line,
  RiUserLine,
  RiWhatsappLine,
} from "@remixicon/react"

function HomePageTest() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900 antialiased">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#"
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
                <RiSearchLine />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative text-gray-600 transition-colors hover:text-primary">
              <RiShoppingCart2Line />
              <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button className="hidden text-gray-600 transition-colors hover:text-primary sm:block">
              <RiUserLine />
            </button>
          </div>
        </div>
      </header>

      <section className="relative bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Mulai Kebun <br /> Impianmu Hari Ini.
            </h1>
            <p className="mb-8 max-w-lg text-lg text-green-100 sm:text-xl">
              Kami menyediakan benih tanaman sayur, buah, dan herbal berkualitas
              tinggi dengan tingkat perkecambahan terbaik untuk pekarangan
              rumahmu.
            </p>
            <a
              href="#produk"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-gray-100"
            >
              Belanja Sekarang <RiArrowRightLine />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Kategori Pilihan
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-primary">
              <RiPlantLine />
            </div>
            <span className="font-medium">Sayur Daun</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <RiSeedlingLine />
            </div>
            <span className="font-medium">Sayur Umbi</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-purple-500">
              <RiMedicineBottleLine />
            </div>
            <span className="font-medium">Tanaman Herbal</span>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-primary">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-500">
              <RiDropLine />
            </div>
            <span className="font-medium">Nutrisi & Pupuk</span>
          </div>
        </div>
      </section>

      <section
        id="produk"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Produk Terlaris
            </h2>
            <p className="mt-1 text-gray-500">
              Benih paling banyak dicari minggu ini
            </p>
          </div>
          <a
            href="#"
            className="hidden font-medium text-primary hover:underline sm:block"
          >
            Lihat Semua
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Benih Wortel"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
                Terlaris
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="line-clamp-2 flex-1 text-sm font-medium text-gray-900 sm:text-base">
                Benih Wortel Manis (Isi 100 Biji)
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  Rp 12.000
                </span>
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary">
                <RiShoppingCart2Line /> + Keranjang
              </button>
            </div>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1629837920337-142f36bc40d2?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Benih Kelor"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="line-clamp-2 flex-1 text-sm font-medium text-gray-900 sm:text-base">
                Benih Daun Kelor Organik Unggul
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  Rp 15.000
                </span>
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary">
                <RiShoppingCart2Line /> + Keranjang
              </button>
            </div>
          </div>

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
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary">
                <RiShoppingCart2Line /> + Keranjang
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
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary">
                <RiShoppingCart2Line /> + Keranjang
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t bg-white pt-12 text-sm text-gray-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <a
                href="#"
                className="flex items-center gap-2 text-xl font-bold text-primary"
              >
                <RiLeafFill />
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
                <li className="flex items-center">
                  <RiWhatsappLine className="mr-2" /> +62 812-3456-7890
                </li>
                <li className="flex items-center">
                  <RiMailLine className="mr-2" /> hello@benihbibit.com
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

export default HomePageTest
