import Logo from "@/assets/logo.png"

import {
  RiSearchLine,
  RiShoppingBasketLine,
  RiUserLine,
} from "@remixicon/react"
import Products from "./components/products"
import { CarouselEx } from "./components/carousel-ex"

export function App() {
  return (
    <div className="home">
      <div className="navbar mt-3 flex items-center justify-evenly">
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex items-center justify-center space-x-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center justify-center space-x-5">
          <div className="flex w-full cursor-pointer justify-center rounded-3xl bg-neutral-200 p-1.5 text-center">
            <RiSearchLine size={24} />
          </div>
          <a
            href="#"
            className="flex w-full cursor-pointer justify-center rounded-3xl bg-neutral-200 p-1.5 text-center"
          >
            <RiUserLine size={24} />
          </a>
          <a
            href="#"
            className="flex w-full cursor-pointer justify-center rounded-3xl bg-neutral-200 p-1.5 text-center"
          >
            <RiShoppingBasketLine size={24} />
          </a>
        </div>
      </div>

      <CarouselEx />
      <Products />
    </div>
  )
}

export default App
