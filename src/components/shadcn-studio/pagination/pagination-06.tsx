import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

const pages = [1, 2, 3]

const PaginationWithRoundedButton = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' className='rounded-full' />
        </PaginationItem>
        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink href={`#${page}`} isActive={page === 2} className='rounded-full'>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href='#' className='rounded-full' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWithRoundedButton
