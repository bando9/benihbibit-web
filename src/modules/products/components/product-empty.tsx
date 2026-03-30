import { Button } from "@/components/ui/button"

type ProductEmptyPropsType = {
  resetFilters: () => void
}
function ProductEmpty(resetFilters: ProductEmptyPropsType) {
  return (
    <div className="py-20 text-center">
      <p className="text-lg text-muted-foreground">No products found.</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Try adjusting your filters.
      </p>
      <Button variant="outline" className="mt-4" onClick={() => resetFilters}>
        Reset Filters
      </Button>
    </div>
  )
}

export default ProductEmpty
