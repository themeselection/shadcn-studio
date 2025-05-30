import { BellIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'

const ButtonNotificationsBadgeDemo = () => {
  return (
    <Button variant='outline' className='relative'>
      <BellIcon />
      Notifications
      <Badge variant='destructive' className='absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums'>
        8
      </Badge>
    </Button>
  )
}

export default ButtonNotificationsBadgeDemo
