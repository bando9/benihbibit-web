import type { paths } from "@/modules/products/schema/schema"
import z from "zod"

export type RegisterUserSchema =
  paths["/auth/register"]["post"]["requestBody"]["content"]["application/json"]

export type ProductsType =
  paths["/products"]["get"]["responses"][200]["content"]["application/json"]

export type ProductType = ProductsType[number]

export type ProductQueryParamsType =
  paths["/products"]["get"]["parameters"]["query"]

export type ProductSortBy = NonNullable<ProductQueryParamsType>["sortBy"]

export const RequestRegisterSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
})
