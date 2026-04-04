import { RiSearchLine, RiShoppingCartFill, RiUserLine } from "@remixicon/react"
import { Link } from "react-router"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

function Navbar() {
  const isCartFilled = true
  const isLogin = true

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-evenly bg-[#eef6f1] py-4 shadow-md">
      <Link to="/" className="flex items-center space-x-1">
        <img src="logo-icon.svg" alt="logo benihbunbun" className="w-9" />
        <h3 className="text-sm font-semibold text-primary uppercase">
          benihbunbun
        </h3>
      </Link>

      <ul className="hidden items-center justify-center space-x-5 text-base text-[#15281f] md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="items-center justify-center space-x-5 text-[#15281f] md:flex">
        <div className="w-full cursor-pointer rounded-3xl p-1.5 text-center">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <RiSearchLine />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex items-center gap-2">
          {isLogin ? (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="cursor-pointer">
                    <RiUserLine />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-40">
                  <Button variant="ghost" className="cursor-pointer">
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <Link to="/login">
              <RiUserLine />
            </Link>
          )}

          <Link to="/cart">
            {isCartFilled ? (
              <Link to="/cart" className="cursor-pointer">
                <RiShoppingCartFill />
              </Link>
            ) : (
              <Link to="/cart" className="cursor-pointer">
                <RiShoppingCartFill size={24} />
              </Link>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
