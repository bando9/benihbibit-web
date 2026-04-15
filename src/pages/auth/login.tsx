import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { $api } from "@/modules/products/api"
import { RequestLoginSchema } from "@/types"
import {
  RiEye2Line,
  RiEyeCloseLine,
  RiLockLine,
  RiMailLine,
} from "@remixicon/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const { mutate, isPending } = $api.useMutation("post", "/auth/login")

  const form = useForm<z.infer<typeof RequestLoginSchema>>({
    resolver: zodResolver(RequestLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(user: z.infer<typeof RequestLoginSchema>) {
    mutate(
      {
        body: {
          email: user.email,
          password: user.password,
        },
      },
      {
        onSuccess: () => {
          navigate("/dashboard")
        },
        onError: (err) => {
          if (err) {
            console.error(err)
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
          <h2 className="mb-1 text-2xl">
            Hello, <span className="font-bold">Welcome Back!</span>
          </h2>
          <p className="text-sm text-accent-foreground">
            Your urban jungle is waiting. Log in to manage your collection, and
            stay ahead of the pruning season.
          </p>
        </div>

        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet className="w-full">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="password">
                    Email Addresss <span className="text-destructive">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="Enter your email address"
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
                      id="password"
                      {...form.register("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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
            <Field orientation="horizontal" className="grid grid-cols-2">
              <Button
                type="submit"
                className="cursor-pointer"
                disabled={isPending}
              >
                {isPending ? "Loading to login" : "Submit"}
              </Button>
              <Button
                variant="outline"
                type="button"
                className="cursor-pointer"
              >
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
      <p className="text-sm text-accent-foreground">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="cursor-pointer font-semibold hover:underline"
        >
          Register for free
        </Link>
        .
      </p>
    </div>
  )
}

export default Login
