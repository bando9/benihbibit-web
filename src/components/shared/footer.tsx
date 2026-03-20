import Logo from "@/assets/logo.png"
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTelegram2Line,
  RiTiktokLine,
} from "@remixicon/react"

export default function Footer() {
  return (
    <div className="static bottom-0 mt-15 flex flex-col items-center justify-center bg-accent pt-5 pb-2">
      <div className="flex flex-col items-center">
        <div>
          <img src={Logo} alt="logo benihbunbun" className="rounded-2xl" />
        </div>
        <ul className="mt-3 flex space-x-10">
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
      <div className="mt-5 flex space-x-10 pb-10">
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
    </div>
  )
}
