import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  RiEye2Line,
  RiEyeCloseLine,
  RiLockLine,
  RiMailLine,
} from "@remixicon/react"
import { Link } from "react-router"

function Login() {
  const isOpenPassword = false
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

        <form className="w-full">
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
                      type="password"
                      placeholder="Enter your password"
                    />
                    <InputGroupAddon>
                      <RiLockLine />
                    </InputGroupAddon>
                    <InputGroupAddon
                      align="inline-end"
                      className="cursor-pointer"
                    >
                      {isOpenPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal" className="grid grid-cols-2">
              <Button type="submit" className="cursor-pointer">
                Submit
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
