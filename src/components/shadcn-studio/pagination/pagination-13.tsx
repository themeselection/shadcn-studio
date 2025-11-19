import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'

const MiniPagination = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to previous page' size='icon'>
            <ChevronLeftIcon className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <p className='text-muted-foreground text-sm' aria-live='polite'>
            Page <span className='text-foreground'>2</span> of <span className='text-foreground'>5</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to next page' size='icon'>
            <ChevronRightIcon className='size-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default MiniPagination
