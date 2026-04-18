import {
  RiRecycleLine,
  RiEarthLine,
  RiPencilRuler2Line,
  RiTeamLine,
  RiBookOpenLine,
} from "@remixicon/react"

export default function About() {
  const coreValues = [
    {
      title: "Action",
      icon: RiRecycleLine,
      description:
        "Bermula dari melihat aktivitas revisian mahasiswa dalam membuat tugas akhir, kertas bekas pun menumpuk di pojok kamar kosan. Belum lagi ketika berada di TPA, sampah kertas masih banyak belum terpisah dengan baik sehingga bercampur baru dengan jenis sampah lainnya. Akhirnya, sembari kami mengumpulkan kertas bekas, kami olah kertas tersebut menjadi kertas daur ulang yang kemudian bisa dimanfaatkan dengan nilai lebih dapat kembali ke tanah dengan baik. Karena kertas daur ulang kami diolah menjadi kertas yang dapat ditanam atau disebut Kertas Benih.",
    },
    {
      title: "Background",
      icon: RiEarthLine,
      description:
        "Melihat dari kacamata isu masalah diantaranya rendahnya minat anak muda dalam menanam padahal populasi didominasi oleh anak muda, minimnya ketertarikan pada isu lingkungan, sampah sayuran layak pakan dan sampah sisa makanan yang masih menjadi penyumbang nomor satu sampah di Indonesia, menjadikan latar belakang benihbunbun untuk berkontribusi negatif pada masalah tersebut. Ditambah lagi dengan isu sosial tentang hambatan perempuan pedesaan yang menjadi semangat kami untuk merangkul perempuan agar mampu memiliki daya kapasitas tangguh.",
    },
    {
      title: "Development",
      icon: RiPencilRuler2Line,
      description:
        "Selain memanfaatkan sampah kertas bekas, kami mencoba mengolah dan memodifikasi bahan produksi lainnya seperti pensil. Seperti yang telah diketahui bahwa pensil memiliki masa habis pakai. Sehingga ketika pensil memendek dan tak dapat dipakai lagi, pensil akan di buang ke tempat sampah dan lagi-lagi bercampur dengan jenis sampah lainnya. Dengan harapan adanya edukasi dan berprinsip sustainable, kami olah pensil pada umumnya menjadi pensil yang berakhir ditanam dan dapat terurai di tanah. Kemudian pemanfaatan kardus dan sejenisnya yang dioleh kembali untuk pengembangan produk edukasi menanam.",
    },
    {
      title: "Empowerment",
      icon: RiTeamLine,
      description:
        "Benihbunbun ingin membawa manfaat lebih untuk masyarakat di sekitar rumah produksi. Saat ini, secara bertahap kami mengajak Ibu-Ibu Rumah Tangga untuk ikut berpartisipasi dalam pengolahan dan pengelolaan untuk memenuhi kebutuhan produksi. Seperti: memilah sampah dan mengumpulkan kertas bekas, panen dan koleksi benih, dan lain-lain.",
    },
    {
      title: "Education",
      icon: RiBookOpenLine,
      description:
        "Tak hanya membuat produk, kami juga mengedukasi dalam bentuk tulisan artikel pada website ini dan mengadakan workshop/training offline maupun online. Setiap pembelian produk benihbunbun, akan mendapatkan layanan konsultasi, challenge menanam souvenir kertas benih, dan informasi bahwa paket dikemas dengan menggunakan kardus reuse. Banyak hal yang ingin kami sampaikan. Setiap pengalaman yang kami alami dan temui, akan kami ceritakan dan share di media sosial kami.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Cerita <span className="text-primary">benihbunbun</span>
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          Ada yang menarik dari keinginan tak ingin menjadi sia-sia. Bagi kami,
          menjadi sia-sia hanyalah ungkapan karena belum ada rasa keinginan
          untuk membuatnya jadi lebih bermanfaat. Dari sinilah akhirnya,
          benihbunbun hadir.
        </p>
      </div>

      <hr className="my-16 border-border" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {coreValues.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
