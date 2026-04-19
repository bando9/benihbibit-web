import type { CookieValues } from "@/types"
import { useCookies } from "react-cookie"
import { $api } from "../products/api"
import { useLocation, useNavigate } from "react-router"

export function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies<"token", CookieValues>(
    []
  )
  const navigate = useNavigate()
  const location = useLocation()

  const setToken = (token: string) => {
    setCookie("token", token, { path: "/" })
  }

  const logout = () => {
    removeCookie("token", { path: "/" })
    if (location.pathname == "/dashboard") {
      navigate("/")
    }
  }

  return {
    token: cookies.token,
    setToken,
    logout,
  }
}

export function useUser() {
  const { token, logout } = useAuth()

  if (!token) {
    return {
      isAuthenticated: false,
      user: null,
      error: null,
      isLoading: null,
      logout,
    }
  }

  const {
    data: user,
    isLoading,
    error,
  } = $api.useQuery("get", "/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!user || error) {
    return {
      isAuthentitaced: false,
      user,
      error,
      isLoading,
      logout,
    }
  }

  return {
    isAuthenticated: true,
    user,
    error,
    isLoading,
    logout,
  }
}
