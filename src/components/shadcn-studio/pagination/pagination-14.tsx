import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const PaginationWithSelectDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to first page' size='icon' className='rounded-full'>
            <ChevronFirstIcon className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to previous page' size='icon' className='rounded-full'>
            <ChevronLeftIcon className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <Select defaultValue={String(1)} aria-label='Select page'>
            <SelectTrigger id='select-page' className='w-fit whitespace-nowrap' aria-label='Select page'>
              <SelectValue placeholder='Select page' />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(page => (
                <SelectItem key={page} value={String(page)}>
                  Page {page}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to next page' size='icon' className='rounded-full'>
            <ChevronRightIcon className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' aria-label='Go to last page' size='icon' className='rounded-full'>
            <ChevronLastIcon className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithSelectDemo
