import {
  RiSearchLine,
  RiShoppingCartFill,
  RiShoppingCartLine,
  RiUserLine,
} from "@remixicon/react"
import { Form, Link } from "react-router"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useUser } from "@/modules/auth/hooks"

function Navbar() {
  const { isAuthenticated } = useUser()

  const isCartFilled = true

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-evenly bg-[#eef6f1] py-4 shadow-md">
      <Link to="/" className="flex items-center space-x-1">
        <img src="/logo-icon.svg" alt="logo benihbunbun" className="w-9" />
        <h3 className="text-sm font-semibold text-primary uppercase">
          benihbunbun
        </h3>
      </Link>

      <ul className="hidden items-center justify-center space-x-5 text-base text-[#15281f] md:flex">
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

      <div className="items-center justify-center space-x-5 text-[#15281f] md:flex">
        <div className="w-full cursor-pointer rounded-3xl p-1.5 text-center">
          <Form action="/products" method="get">
            <InputGroup>
              <InputGroupInput
                placeholder="Type to search..."
                name="q"
                required
              />
              <InputGroupAddon>
                <RiSearchLine />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="outline">Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Button asChild variant="outline" className="cursor-pointer">
              <Link to="/dashboard">
                <RiUserLine />
              </Link>
            </Button>
          ) : (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="cursor-pointer">
                    <RiUserLine />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-40">
                  <>
                    <Button
                      variant="outline"
                      className="cursor-pointer"
                      asChild
                    >
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="cursor-pointer"
                      asChild
                    >
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                </PopoverContent>
              </Popover>
            </>
          )}

          {isCartFilled ? (
            <Button variant="outline" className="cursor-pointer" asChild>
              <Link to="/cart" className="cursor-pointer">
                <RiShoppingCartFill />
              </Link>
            </Button>
          ) : (
            <Button variant="outline" className="cursor-pointer" asChild>
              <Link to="/cart" className="cursor-pointer">
                <RiShoppingCartLine />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
