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
    <div className="flex flex-col justify-between rounded-xl bg-accent px-20 py-10">
      <div>
        <h2 className="mb-2 text-2xl">
          Hello, <span className="font-bold">Welcome Back!</span>
        </h2>
        <p className="text-sm text-accent-foreground">
          We're happy to see you again. let's Stay ahead of the plants.
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
            <Button variant="outline" type="button" className="cursor-pointer">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <p className="mt-15 text-sm text-accent-foreground">
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
