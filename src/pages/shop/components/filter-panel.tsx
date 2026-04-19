import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Form, useSearchParams, useSubmit } from "react-router"

function FilterPanel() {
  const submit = useSubmit()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleAutoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget, {
      replace: true,
    })
  }

  return (
    <>
      <Form className="space-y-6" onChange={handleAutoSubmit}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Price Range
          </label>
          <div className="flex gap-2">
            <Input placeholder="Min" type="number" />
            <span className="self-center text-muted-foreground">–</span>
            <Input placeholder="Max" type="number" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Sort By
          </label>
          <Select
            defaultValue={searchParams.get("sortBy") || "createdAt"}
            onValueChange={(value) => {
              const newParams = new URLSearchParams(searchParams)
              newParams.set("sortBy", value)
              newParams.set("page", "1")
              setSearchParams(newParams)
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Newest</SelectItem>
              <SelectItem value="price_asc">Price: Low to High</SelectItem>
              <SelectItem value="price_desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Form>
    </>
  )
}

export default FilterPanel
