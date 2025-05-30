import { BellIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const IconButtonNotificationDotDemo = () => {
  return (
    <Button variant='outline' size='icon' className='relative'>
      <BellIcon />
      <span className='absolute -end-0.5 -top-0.5 size-2 animate-bounce rounded-full bg-sky-600 dark:bg-sky-400' />
      <span className='sr-only'>Notifications</span>
    </Button>
  )
}

export default IconButtonNotificationDotDemo
