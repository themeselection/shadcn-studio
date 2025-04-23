import { BanIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'

const BadgeFailedDemo = () => {
  return (
    <Badge
      variant='outline'
      className='text-destructive [a&]:hover:bg-destructive/10 [a&]:hover:text-destructive/90 border-destructive'
    >
      <BanIcon className='size-3' />
      Failed
    </Badge>
  )
}

export default BadgeFailedDemo
