import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "react-router"

type PaginationProps = {
  totalPages: string | null
}

function ProductPagination({ totalPages }: PaginationProps) {
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1
  const NumTotalPages = Number(totalPages)

  function createPageURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())

    return `/products?${params.toString()}`
  }

  return (
    <div className="mt-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              href={createPageURL(currentPage - 1)}
            />
          </PaginationItem>

          {Array.from({ length: NumTotalPages }).map((_, index) => {
            const page = index + 1
            const isCurrentPage = page == currentPage

            return (
              <PaginationLink
                className="cursor-pointer"
                isActive={isCurrentPage}
                href={createPageURL(page)}
              >
                {page}
              </PaginationLink>
            )
          })}

          {NumTotalPages >= 5 ? (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          ) : (
            <></>
          )}

          <PaginationItem>
            <PaginationNext
              className={
                currentPage === NumTotalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              href={createPageURL(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ProductPagination
