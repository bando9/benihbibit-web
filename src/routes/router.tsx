import AuthLayout from "@/layouts/auth-layout"
import MainLayout from "@/layouts/main-layout"
import About from "@/pages/about"
import Cart from "@/pages/cart"
import Contact from "@/pages/contact"
import { Home } from "@/pages/home"
import Login from "@/pages/login"
import NotFound from "@/pages/not-found"
import ProductDetail from "@/pages/product-detail"
import Register from "@/pages/register"
import Shop from "@/pages/shop"
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
