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
  RiUserLine,
} from "@remixicon/react"
import { Link } from "react-router"

function Register() {
  const isOpenPassword = false

  return (
    <div className="flex w-full flex-col justify-between rounded-xl bg-accent px-15 py-5">
      <div className="flex flex-col space-y-5">
        <div>
          <h2 className="mb-1 text-2xl font-bold">Start Your Green Journey</h2>
          <p className="text-sm text-accent-foreground">
            Join 10,000+ plant lovers. Create an account to track your plant
            growth—one pot at a time.
          </p>
        </div>

        <form className="w-full">
          <FieldGroup>
            <FieldSet className="w-full">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="name"
                      type="text"
                      placeholder="e.g. Bando Mega"
                    />
                    <InputGroupAddon>
                      <RiUserLine />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">
                    Email Addresss <span className="text-destructive">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="email"
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
                      id="password"
                      type="password"
                      placeholder="Min. 8 strong characters"
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

                <Field>
                  <FieldLabel htmlFor="password">
                    Confirm Password<span className="text-destructive">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="confirm-password"
                      type="password"
                      placeholder="Repeat your password"
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
            <Field>
              <Button type="submit" className="w-full cursor-pointer">
                Register
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
