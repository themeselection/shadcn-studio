import { MailCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ButtonMessagesBadgeDemo = () => {
  return (
    <Button variant='outline'>
      <MailCheckIcon />
      Messages
      <Badge variant='destructive' className='rounded-full px-1.5 py-px'>
        99+
      </Badge>
    </Button>
  )
}

export default ButtonMessagesBadgeDemo
