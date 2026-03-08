import {
  RiSearchLine,
  RiShoppingBasketLine,
  RiUserLine,
} from "@remixicon/react"

export function App() {
  return (
    <div className="navbar mt-3 flex items-center justify-evenly">
      <div>
        <img src="/assets/logo.png" alt="" />
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
  )
}

export default App
