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

function Register() {
  const isOpenPassword = false
  return (
    <div className="space-y-5 rounded-xl bg-accent px-20 py-10">
      <h2 className="text-2xl font-bold">Create an Account</h2>
      <p>Join now to save the world with plant.</p>

      <form className="grid w-full max-w-sm gap-6">
        <FieldGroup>
          <FieldSet className="w-full max-w-xs">
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
        Already Have An Account?
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
