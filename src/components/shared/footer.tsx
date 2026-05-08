import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTelegram2Line,
  RiTiktokLine,
} from "@remixicon/react"
import { Link } from "react-router"

export default function Footer() {
  return (
    <div className="static bottom-0 flex flex-col items-center justify-center bg-[#15281f] pt-15 pb-2">
      <div className="flex flex-col items-center">
        <div className="mb-5 flex items-center justify-center space-x-1">
          <img src="/logo-icon.svg" alt="logo benihbunbun" className="w-10" />
          <h3 className="text-base font-semibold text-accent uppercase">
            benihbibit
          </h3>
        </div>
        <ul className="mt-3 flex space-x-10 text-accent">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mt-5 flex space-x-10 pb-10 text-accent">
        <Link to="https://www.instagram.com/benihbunbun" target="blank">
          <RiInstagramLine />
        </Link>
        <Link to="https://www.facebook.com/benihbunbun/" target="blank">
          <RiFacebookCircleLine />
        </Link>
        <Link to="https://t.me/ceritaberkebun" target="blank">
          <RiTelegram2Line />
        </Link>
        <Link
          to="https://www.tiktok.com/@souveniredukasimenanam?is_from_webapp=1&sender_device=pc"
          target="blank"
        >
          <RiTiktokLine />
        </Link>
      </div>
      <div className="w-full border-t border-gray-400">
        <h3 className="py-1.5 text-center text-sm text-gray-400">
          © Benihbibit. All Right Reserved.
        </h3>
      </div>
    </div>
  )
}
