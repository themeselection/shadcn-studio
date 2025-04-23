import { ShoppingCartIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'
import { Badge } from '@/registry/new-york/ui/badge'

const BadgeCartDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-9 rounded-sm'>
        <AvatarFallback className='rounded-sm'>
          <ShoppingCartIcon className='size-5' />
        </AvatarFallback>
      </Avatar>
      <Badge className='absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums'>8</Badge>
    </div>
  )
}

export default BadgeCartDemo
