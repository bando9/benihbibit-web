import type { CookieValues } from "@/types"
import { useCookies } from "react-cookie"

export function useAuth() {
  const [cookies, setCookie] = useCookies<"token", CookieValues>([])

  const setToken = (token: string) => {
    setCookie("token", token)
  }

  return {
    token: cookies.token,
    setToken,
  }
}
