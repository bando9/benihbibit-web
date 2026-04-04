import AuthLayout from "@/layouts/auth-layout"
import MainLayout from "@/layouts/main-layout"
import About from "@/pages/about/about"
import Login from "@/pages/auth/login"
import Register from "@/pages/auth/register"
import Cart from "@/pages/cart/cart"
import Contact from "@/pages/contact/contact"
import { Home } from "@/pages/home/home"
import NotFound from "@/pages/not-found"
import ProductDetail from "@/pages/product-detail"
import Shop from "@/pages/shop/shop"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    ErrorBoundary: NotFound,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      {
        path: "product/:slug",
        loader: async ({ params }) => {
          return { slug: params.slug }
        },
        Component: ProductDetail,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
])
