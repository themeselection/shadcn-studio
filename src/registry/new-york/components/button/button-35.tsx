import { MailCheckIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'

const IconButtonBadgeDemo = () => {
  return (
    <Button variant='outline' size='icon' className='relative'>
      <MailCheckIcon />
      <span className='sr-only'>Messages</span>
      <Badge variant='destructive' className='absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums'>
        8
      </Badge>
    </Button>
  )
}

export default IconButtonBadgeDemo
