

function filterPanel() {
  return <>
  const FilterPanel = ({ onClose }: { onClose?: () => void }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground lg:hidden"
          >
            <RiCloseLine size={20} />
          </button>
        )}
      </div>

      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Search
        </label>
        <div className="relative">
          <RiSearch2Line
            size={16}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search products..."
            // value={searchQuery}
            // onChange={(e) => {
            //   setSearchQuery(e.target.value)
            //   setCurrentPage(1)
            // }}
            className="pl-9"
          />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Price Range
        </label>
        <div className="flex gap-2">
          <Input
            placeholder="Min"
            type="number"
            // value={minPrice}
            // onChange={(e) => {
            //   setMinPrice(e.target.value)
            //   setCurrentPage(1)
            // }}
          />
          <span className="self-center text-muted-foreground">–</span>
          <Input
            placeholder="Max"
            type="number"
            // value={maxPrice}
            // onChange={(e) => {
            //   setMaxPrice(e.target.value)
            //   setCurrentPage(1)
            // }}
          />
        </div>
      </div>

      {/* Availability */}
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
              // onClick={() => {
              //   setAvailability(val)
              //   setCurrentPage(1)
              // }}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors`}
            >
              {/* ${
                availability === val
                  ? "bg-primary font-medium text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              } */}
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Sort By
        </label>
        <Select
          value={sortBy}
          onValueChange={(v) => setSortBy(v as ProductSortBy)}
        >
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

      <Button variant="outline" className="w-full" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  )</>
}

export default filterPanel


