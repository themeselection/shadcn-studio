import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const NumberlessPaginationWithTextDemo = () => {
  return (
    <Pagination>
      <PaginationContent className='w-full justify-between'>
        <PaginationItem>
          <PaginationPrevious href='#' className='border' />
        </PaginationItem>
        <PaginationItem>
          <p className='text-muted-foreground text-sm' aria-live='polite'>
            Page <span className='text-foreground'>2</span> of <span className='text-foreground'>5</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' className='border' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default NumberlessPaginationWithTextDemo
