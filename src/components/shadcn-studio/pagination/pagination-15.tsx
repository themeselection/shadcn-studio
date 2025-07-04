import { useId } from 'react'

import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Label } from '@/components/ui/label'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const pages = [1, 2, 3]

const TablePaginationDemo = () => {
  const id = useId()

  return (
    <div className='flex w-full flex-wrap items-center justify-between gap-6 max-sm:justify-center'>
      <div className='flex shrink-0 items-center gap-3'>
        <Label htmlFor={id}>Rows per page</Label>
        <Select defaultValue='10'>
          <SelectTrigger id={id} className='w-fit whitespace-nowrap'>
            <SelectValue placeholder='Select number of results' />
          </SelectTrigger>
          <SelectContent className='[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2'>
            <SelectItem value='10'>10</SelectItem>
            <SelectItem value='25'>25</SelectItem>
            <SelectItem value='50'>50</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='text-muted-foreground flex grow items-center justify-end whitespace-nowrap max-sm:justify-center'>
        <p className='text-muted-foreground text-sm whitespace-nowrap' aria-live='polite'>
          Showing <span className='text-foreground'>1</span> to <span className='text-foreground'>10</span> of{' '}
          <span className='text-foreground'>100</span> products
        </p>
      </div>
      <Pagination className='w-fit max-sm:mx-0'>
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
          {pages.map(page => (
            <PaginationItem key={page}>
              <PaginationLink href={`#${page}`} isActive={page === 2} className='rounded-full'>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <PaginationEllipsis />
              </TooltipTrigger>
              <TooltipContent>
                <p>2 other pages</p>
              </TooltipContent>
            </Tooltip>
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
    </div>
  )
}

export default TablePaginationDemo
