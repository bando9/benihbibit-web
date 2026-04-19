import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { $api } from "@/modules/products/api"
import {
  RiEye2Line,
  RiEyeCloseLine,
  RiLockLine,
  RiMailLine,
  RiUserLine,
} from "@remixicon/react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { RequestRegisterSchema } from "@/types"

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const { mutate, isPending } = $api.useMutation("post", "/auth/register", {})
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof RequestRegisterSchema>>({
    resolver: zodResolver(RequestRegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof RequestRegisterSchema>) {
    mutate(
      {
        body: {
          name: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
        },
      },
      {
        onSuccess: () => {
          navigate("/login?registered=true", {
            replace: true,
            state: { message: "Successfully to register new Account" },
          })
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (err: any) => {
          if (err?.error.code === "P2002") {
            console.error(err?.message)
          }
        },
      }
    )
  }

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex w-full flex-col justify-between rounded-xl bg-accent px-15 py-5">
      <div className="flex flex-col space-y-5">
        <div>
          <Link
            to="/"
            className="mx-auto flex w-40 items-center justify-center space-x-1 pb-2"
          >
            <img src="/logo-icon.svg" alt="logo benihbunbun" className="w-6" />
            <h3 className="text-xs font-semibold text-primary uppercase">
              benihbunbun
            </h3>
          </Link>

          <h2 className="mb-1 text-2xl font-bold">Start Your Green Journey</h2>
          <p className="text-sm text-accent-foreground">
            Join 10,000+ plant lovers. Create an account to track your plant
            growth—one pot at a time.
          </p>
        </div>

        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet className="w-full">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...form.register("name")}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Bando Mega"
                    />
                    <InputGroupAddon>
                      <RiUserLine />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel htmlFor="username">User Name</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...form.register("username")}
                      id="username"
                      name="username"
                      type="text"
                      placeholder="e.g. Bando Mega"
                    />
                    <InputGroupAddon>
                      <RiUserLine />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">
                    Email Addresss <span className="text-destructive">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...form.register("email")}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="yourname@email.com"
                    />
                    <InputGroupAddon>
                      <RiMailLine />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">
                    Password<span className="text-destructive">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...form.register("password")}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 strong characters"
                    />
                    <InputGroupAddon>
                      <RiLockLine />
                    </InputGroupAddon>
                    <InputGroupAddon
                      align="inline-end"
                      className="cursor-pointer"
                    >
                      {showPassword ? (
                        <RiEye2Line onClick={handleShowPassword} />
                      ) : (
                        <RiEyeCloseLine onClick={handleShowPassword} />
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full cursor-pointer"
              >
                {isPending ? "Creating account..." : "Register"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
      <p className="text-sm text-accent-foreground">
        Already Have An Account?{" "}
        <Link
          to="/login"
          className="cursor-pointer font-semibold hover:underline"
        >
          Log In
        </Link>
        .
      </p>
    </div>
  )
}

export default Register
