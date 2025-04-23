import { AlertCircleIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'

const BadgePendingDemo = () => {
  return (
    <Badge
      variant='outline'
      className='border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400 [a&]:hover:bg-amber-600/10 [a&]:hover:text-amber-600/90 dark:[a&]:hover:bg-amber-400/10 dark:[a&]:hover:text-amber-400/90'
    >
      <AlertCircleIcon className='size-3' />
      Pending
    </Badge>
  )
}

export default BadgePendingDemo
