import About from "@/pages/about"
import Cart from "@/pages/cart"
import Contact from "@/pages/contact"
import Home from "@/pages/home"
import Shop from "@/pages/shop"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
])
