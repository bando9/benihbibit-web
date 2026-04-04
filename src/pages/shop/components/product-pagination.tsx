import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type PaginationProps = {
  totalPages: string | null
}

function ProductPagination({ totalPages }: PaginationProps) {
  return (
    <div className="mt-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/" />
          </PaginationItem>

          {Array.from({ length: Number(totalPages) }).map((_, page) => (
            <PaginationLink className="cursor-pointer">
              {page + 1}
            </PaginationLink>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ProductPagination
