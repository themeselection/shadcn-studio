type UsePaginationProps = {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay: number
}

type UsePaginationReturn = {
  pages: number[]
  showLeftEllipsis: boolean
  showRightEllipsis: boolean
}

export function usePagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay
}: UsePaginationProps): UsePaginationReturn {
  function calculatePaginationRange(): number[] {
    if (totalPages <= paginationItemsToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfDisplay = Math.floor(paginationItemsToDisplay / 2)

    const initialRange = {
      start: currentPage - halfDisplay,
      end: currentPage + halfDisplay
    }

    const adjustedRange = {
      start: Math.max(1, initialRange.start),
      end: Math.min(totalPages, initialRange.end)
    }

    if (adjustedRange.start === 1) {
      adjustedRange.end = Math.min(paginationItemsToDisplay, totalPages)
    }

    if (adjustedRange.end === totalPages) {
      adjustedRange.start = Math.max(1, totalPages - paginationItemsToDisplay + 1)
    }

    return Array.from({ length: adjustedRange.end - adjustedRange.start + 1 }, (_, i) => adjustedRange.start + i)
  }

  const pages = calculatePaginationRange()

  // Determine ellipsis display based on the actual pages shown
  const showLeftEllipsis = pages.length > 0 && pages[0] > 1 && pages[0] > 2

  const showRightEllipsis =
    pages.length > 0 && pages[pages.length - 1] < totalPages && pages[pages.length - 1] < totalPages - 1

  return {
    pages,
    showLeftEllipsis,
    showRightEllipsis
  }
}
