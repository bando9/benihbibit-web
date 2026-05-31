import AuthLayout from "@/layouts/auth-layout"
import MainLayout from "@/layouts/main-layout"
import About from "@/pages/about"
import Login from "@/pages/auth/login"
import ProtectedRoute from "@/pages/auth/protected-route"
import Register from "@/pages/auth/register"
import { Cart } from "@/pages/cart"
import { CheckoutLayout } from "@/layouts/checkout-layout"
import Contact from "@/pages/contact"
import Dashboard from "@/pages/dashboard"
import { Home } from "@/pages/home"
import NotFound from "@/pages/not-found"
import ProductDetail from "@/pages/product-detail/product-detail"
import Shop from "@/pages/shop"
import { createBrowserRouter } from "react-router"
import CheckoutPage from "@/pages/checkout"
import HomePageTest from "@/pages/home/page"
import LoginTes from "@/pages/auth/login-tes"
import ProductsTes from "@/pages/shop/index-tes"

export const router = createBrowserRouter([
  { path: "login-tes", Component: LoginTes },
  { path: "tes", Component: HomePageTest },
  { path: "products-tes", Component: ProductsTes },
  {
    path: "/",
    Component: MainLayout,
    ErrorBoundary: NotFound,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "products", Component: Shop },
      {
        path: "product/:slug",
        loader: async ({ params }) => {
          return { slug: params.slug }
        },
        Component: ProductDetail,
      },
      {
        Component: ProtectedRoute,
        children: [
          { path: "cart", Component: Cart },
          { path: "dashboard", Component: Dashboard },
        ],
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
  {
    Component: CheckoutLayout,
    children: [{ path: "checkout", Component: CheckoutPage }],
  },
])
