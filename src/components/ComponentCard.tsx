// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import type { RegistryItem } from 'shadcn/registry'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

const ComponentCard = ({
  children,
  component,
  className
}: {
  children: ReactNode
  component: RegistryItem
  className?: string
}) => {
  return (
    <div
      className={cn(
        'group/item relative flex min-h-[210px] items-center justify-center px-8 py-12 group-first/grid:border-t-0',
        className
      )}
      data-slot={component.name}
    >
      {children}
    </div>
  )
}

export default ComponentCard
