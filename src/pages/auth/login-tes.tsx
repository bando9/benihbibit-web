function LoginTes() {
  return (
    <div className="bg-white font-sans text-gray-900 antialiased">
      <div className="flex min-h-screen">
        {/* <!-- ===================== BAGIAN KIRI: Foto Visual (Hanya tampil di PC) ===================== --> */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200&h=1080"
            alt="Pekarangan Hijau"
          />
          {/* <!-- Overlay Hijau Transparan --> */}
          <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply"></div>

          {/* <!-- Teks Kutipan di Atas Gambar --> */}
          <div className="absolute right-12 bottom-12 left-12 z-10 text-white">
            <blockquote className="space-y-4">
              <p className="text-2xl leading-relaxed font-medium">
                "Menanam sebuah benih berarti percaya pada hari esok. Mulai
                wujudkan kebun impianmu hari ini."
              </p>
              <footer className="text-lg font-bold text-green-200">
                — BenihBibit Team
              </footer>
            </blockquote>
          </div>
        </div>

        {/* <!-- ===================== BAGIAN KANAN: Form Login ===================== --> */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:w-[480px] lg:flex-none lg:px-20 xl:w-[560px] xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* <!-- Logo & Header --> */}
            <div>
              <a
                href="/"
                className="flex items-center gap-2 text-3xl font-bold text-primary"
              >
                <i className="ri-leaf-fill"></i>
                <span>BenihBibit</span>
              </a>
              <h2 className="mt-8 text-2xl leading-9 font-bold tracking-tight text-gray-900">
                Selamat Datang Kembali!
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Silakan masuk ke akunmu untuk melanjutkan belanja benih.
              </p>
            </div>

            <div className="mt-10">
              <form action="#" method="POST" className="space-y-6">
                {/* <!-- Input Email --> */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm leading-6 font-medium text-gray-900"
                  >
                    Alamat Email
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="ri-mail-line text-gray-400"></i>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      //   autocomplete="email"
                      required
                      className="block w-full rounded-md border border-gray-300 py-2.5 pr-3 pl-10 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                      placeholder="contoh@email.com"
                    />
                  </div>
                </div>

                {/* <!-- Input Password --> */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm leading-6 font-medium text-gray-900"
                  >
                    Kata Sandi
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="ri-lock-password-line text-gray-400"></i>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      //   autocomplete="current-password"
                      required
                      className="block w-full rounded-md border border-gray-300 py-2.5 pr-10 pl-10 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                      placeholder="••••••••"
                    />
                    {/* <!-- Tombol Mata (Tampilkan/Sembunyikan Sandi) --> */}
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary"
                    >
                      <i className="ri-eye-off-line"></i>
                    </button>
                  </div>
                </div>

                {/* <!-- Ingat Saya & Lupa Sandi --> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block cursor-pointer text-sm leading-6 text-gray-700"
                    >
                      Ingat saya
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a
                      href="#"
                      className="hover:text-primary-hover font-semibold text-primary"
                    >
                      Lupa kata sandi?
                    </a>
                  </div>
                </div>

                {/* <!-- Tombol Submit --> */}
                <div>
                  <button
                    type="submit"
                    className="hover:bg-primary-hover flex w-full justify-center rounded-md bg-primary px-3 py-3 text-sm leading-6 font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Masuk
                  </button>
                </div>
              </form>

              {/* <!-- Pemisah --> */}
              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-6 font-medium">
                    <span className="bg-white px-6 text-gray-500">
                      Atau lanjutkan dengan
                    </span>
                  </div>
                </div>

                {/* <!-- Login Social Media (Google) --> */}
                <div className="mt-6">
                  <button className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    {/* <!-- SVG Google Icon Original --> */}
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      ></path>
                    </svg>
                    <span className="text-sm leading-6 font-semibold">
                      Masuk dengan Google
                    </span>
                  </button>
                </div>
              </div>

              {/* <!-- Link Daftar --> */}
              <p className="mt-10 text-center text-sm text-gray-500">
                Belum punya akun?
                <a
                  href="/register"
                  className="hover:text-primary-hover leading-6 font-semibold text-primary"
                >
                  Daftar sekarang
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginTes
