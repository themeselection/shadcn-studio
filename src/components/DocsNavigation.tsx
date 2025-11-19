// Next Imports
import Link from 'next/link'

// Third-party Imports
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

type NavItem = {
  name: string
  url: string
}

type ComponentNavigationProps = {
  previousItem: NavItem | null
  nextItem: NavItem | null
}

const DocsNavigation = ({ previousItem, nextItem }: ComponentNavigationProps) => {
  return (
    <div className='mt-10 flex flex-wrap justify-center gap-4 sm:gap-6'>
      <div className='flex grow justify-start md:max-w-[calc(50%-0.75rem)]'>
        {previousItem && (
          <Link
            href={previousItem.url}
            className='group flex grow justify-between gap-4 rounded-lg border px-5 py-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_10px_15px_-3px_color-mix(in_oklab,var(--accent)50%,transparent),0_4px_6px_-4px_color-mix(in_oklab,var(--accent)50%,transparent)]'
          >
            <ArrowLeftIcon className='group-hover:text-primary shrink-0 self-center transition-all duration-300' />
            <div className='flex flex-col items-end gap-2'>
              <span className='text-muted-foreground text-sm'>Previous</span>
              <span className='group-hover:text-primary text-lg font-semibold transition-all duration-300'>
                {previousItem.name}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div className='flex grow justify-end md:max-w-[calc(50%-0.75rem)]'>
        {nextItem && (
          <Link
            href={nextItem.url}
            className='group flex grow justify-between gap-4 rounded-lg border px-5 py-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_10px_15px_-3px_color-mix(in_oklab,var(--accent)50%,transparent),0_4px_6px_-4px_color-mix(in_oklab,var(--accent)50%,transparent)]'
          >
            <div className='flex flex-col items-start gap-2'>
              <span className='text-muted-foreground text-sm'>Next</span>
              <span className='group-hover:text-primary text-lg font-semibold transition-all duration-300'>
                {nextItem.name}
              </span>
            </div>
            <ArrowRightIcon className='group-hover:text-primary shrink-0 self-center transition-all duration-300' />
          </Link>
        )}
      </div>
    </div>
  )
}

export default DocsNavigation
