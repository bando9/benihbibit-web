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
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1
  const NumTotalPages = Number(totalPages)

  const isRangePage = currentPage >= 1 && currentPage <= NumTotalPages

  function handleChangePage(newPage: number) {
    searchParams.set("page", newPage.toString())
    setSearchParams(searchParams)
  }

  return (
    <div className="mt-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/products?page=${currentPage - 1}`}
              onClick={() => handleChangePage(currentPage - 1)}
            />
          </PaginationItem>

          {Array.from({ length: NumTotalPages }).map((_, index) => {
            const page = index + 1
            const isCurrentPage = page == currentPage

            return (
              <PaginationLink
                className="cursor-pointer"
                isActive={isCurrentPage}
                href={`/products?page=${page.toString()}`}
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

          {isRangePage ? (
            <>
              <PaginationItem>
                <PaginationNext
                  href={`/products?page=${currentPage + 1}`}
                  onClick={() => handleChangePage(currentPage + 1)}
                  // aria-disabled={isRangePage}
                  aria-disabled={!isRangePage}
                  className={
                    !isRangePage ? "pointer-events-none opacity-50" : undefined
                  }
                />
              </PaginationItem>
            </>
          ) : (
            <></>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ProductPagination
