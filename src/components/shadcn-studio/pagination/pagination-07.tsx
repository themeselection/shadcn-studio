import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'

const pages = [1, 2, 3]

const PaginationWithFirstAndLastPageButtonNavigation = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to first page' size='icon' className='rounded-full'>
            <ChevronFirstIcon className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to previous page' size='icon' className='rounded-full'>
            <ChevronLeftIcon className='size-4' />
          </PaginationLink>
        </PaginationItem>
        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink href={`#${page}`} isActive={page === 2} className='rounded-full'>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to next page' size='icon' className='rounded-full'>
            <ChevronRightIcon className='size-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to last page' size='icon' className='rounded-full'>
            <ChevronLastIcon className='size-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithFirstAndLastPageButtonNavigation
