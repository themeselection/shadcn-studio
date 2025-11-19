// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import type { RegistryItem } from 'shadcn/schema'

// Util Imports
import { cn } from '@/lib/utils'

const ComponentCard = ({
  children,
  componentName,
  componentTitle,
  className
}: {
  children: ReactNode
  componentName: RegistryItem['name']
  componentTitle?: RegistryItem['title']
  className?: string
}) => {
  return (
    <div
      className={cn(
        'group/item relative flex h-full min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4',
        className
      )}
      data-slot={componentName}
    >
      {children}
      <div className='text-muted-foreground absolute top-3 left-4.5 hidden text-sm group-hover/item:block'>
        {componentTitle}
      </div>
    </div>
  )
}

export default ComponentCard
