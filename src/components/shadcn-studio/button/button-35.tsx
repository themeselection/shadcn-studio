import { MailCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const IconButtonBadgeDemo = () => {
  return (
    <Button variant='outline' size='icon' className='relative'>
      <MailCheckIcon />
      <span className='sr-only'>Messages</span>
      <Badge variant='destructive' className='absolute -top-2.5 -right-2.5 h-5 min-w-5 px-1 tabular-nums'>
        8
      </Badge>
    </Button>
  )
}

export default IconButtonBadgeDemo
