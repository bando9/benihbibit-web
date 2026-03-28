import MainLayout from "@/layouts/main-layout"
import About from "@/pages/about"
import Cart from "@/pages/cart"
import Contact from "@/pages/contact"
import { Home } from "@/pages/home"
import ProductDetail from "@/pages/product-detail"
import Shop from "@/pages/shop"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "shop", Component: Shop },
      { path: "product/:slug", Component: ProductDetail },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
])
