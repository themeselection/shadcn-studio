// React Imports
import type { ReactNode } from 'react'

// Type Imports
import type { ComponentProps } from '@/types/components'

// Util Imports
import { cn } from '@/lib/utils'

const ComponentCard = ({
  children,
  componentName,
  className
}: {
  children: ReactNode
  componentName: ComponentProps['name']
  className?: string
}) => {
  return (
    <div
      className={cn(
        'group/item relative flex min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0 max-sm:px-4',
        className
      )}
      data-slot={componentName}
    >
      {children}
    </div>
  )
}

export default ComponentCard
