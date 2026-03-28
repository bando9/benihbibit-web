import Logo from "/public/logo-icon.svg"

import {
  RiSearchLine,
  RiShoppingCartFill,
  RiShoppingCartLine,
  RiUserLine,
} from "@remixicon/react"

function Navbar() {
  const isCartFilled = true
  return (
    <div className="navbar flex items-center justify-evenly bg-[#eef6f1] pt-3">
      <a className="mb-5 flex items-center justify-center space-x-1">
        <img src={Logo} alt="logo benihbunbun" className="w-10" />
        <h3 className="text-base font-semibold text-primary uppercase">
          benihbunbun
        </h3>
      </a>

      <ul className="flex items-center justify-center space-x-5 text-lg text-[#15281f]">
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

      <div className="flex items-center justify-center space-x-5 text-[#15281f]">
        <div className="flex w-full cursor-pointer justify-center rounded-3xl p-1.5 text-center">
          <RiSearchLine size={24} />
        </div>
        <a
          href="#"
          className="flex w-full cursor-pointer justify-center rounded-3xl p-1.5 text-center"
        >
          <RiUserLine size={24} />
        </a>
        <a
          href="/cart"
          className="flex w-full cursor-pointer justify-center rounded-3xl p-1.5 text-center"
        >
          {isCartFilled ? (
            <RiShoppingCartFill size={24} />
          ) : (
            <RiShoppingCartLine size={24} />
          )}
        </a>
      </div>
    </div>
  )
}

export default Navbar
