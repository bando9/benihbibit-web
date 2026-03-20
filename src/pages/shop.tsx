import { Slider } from "@/components/ui/slider"
import { RiEqualizer2Line } from "@remixicon/react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Shop() {
  return (
    <>
      <div className="mx-15 mb-5 flex items-center justify-between">
        <div className="flex rounded-2xl bg-primary px-3 py-1 text-accent">
          <h3>Filter</h3>
          <RiEqualizer2Line />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p>
          <span className="font-bold">52</span> result found
        </p>
      </div>

      <div className="flex flex-row">
        <aside className="h-screen w-full max-w-70 border-e-2">
          <div className="ms-15 mt-10">
            <h3 className="text-xl font-semibold">Price</h3>
            <Slider
              defaultValue={[25, 50]}
              max={100}
              step={5}
              className="w-full max-w-50"
            />
          </div>
        </aside>

        <div className="ms-4 me-15 w-full bg-primary">dajwbhdawbd</div>
      </div>
    </>
  )
}

export default Shop
