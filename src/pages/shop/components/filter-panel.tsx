import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function filterPanel() {
  return (
    <>
      <div className="space-y-6">
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
            Availability
          </label>
          <div className="space-y-1.5">
            {(
              [
                ["all", "All"],
                ["in-stock", "In Stock"],
                ["out-of-stock", "Out of Stock"],
              ] as const
            ).map(([val, label]) => (
              <Button
                variant="outline"
                key={val}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Sort By
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}

export default filterPanel
