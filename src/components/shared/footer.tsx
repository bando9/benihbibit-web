import Logo from "/public/logo-icon.svg"
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTelegram2Line,
  RiTiktokLine,
} from "@remixicon/react"

export default function Footer() {
  return (
    <div className="static bottom-0 flex flex-col items-center justify-center bg-[#15281f] pt-15 pb-2">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex items-center justify-center space-x-1">
          <img src={Logo} alt="logo benihbunbun" className="w-10" />
          <h3 className="text-base font-semibold text-accent uppercase">
            benihbunbun
          </h3>
        </div>
        <ul className="mt-3 flex space-x-10 text-accent">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="mt-5 flex space-x-10 pb-10 text-accent">
        <a href="https://www.instagram.com/benihbunbun" target="blank">
          <RiInstagramLine />
        </a>
        <a href="https://www.facebook.com/benihbunbun/" target="blank">
          <RiFacebookCircleLine />
        </a>
        <a href="https://t.me/ceritaberkebun" target="blank">
          <RiTelegram2Line />
        </a>
        <a
          href="https://www.tiktok.com/@souveniredukasimenanam?is_from_webapp=1&sender_device=pc"
          target="blank"
        >
          <RiTiktokLine />
        </a>
      </div>
      <div className="w-full border-t border-gray-500">
        <h3 className="py-1.5 text-center text-lg text-gray-500">
          © Benihbibit. All Right Reserved.
        </h3>
      </div>
    </div>
  )
}
