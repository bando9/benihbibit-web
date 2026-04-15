import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router/dom"
import { router } from "./routes/router.tsx"
import { CookiesProvider } from "react-cookie"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CookiesProvider>
  </ThemeProvider>
)
