import { ShoppingCartIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const BadgeCartDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-9 rounded-sm'>
        <AvatarFallback className='rounded-sm'>
          <ShoppingCartIcon className='size-5' />
        </AvatarFallback>
      </Avatar>
      <Badge className='absolute -top-2.5 -right-2.5 h-5 min-w-5 px-1 tabular-nums'>8</Badge>
    </div>
  )
}

export default BadgeCartDemo
