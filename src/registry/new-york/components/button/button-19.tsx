import { ShareIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonPublishDemo = () => {
  return (
    <Button variant='outline' className='h-12 rounded-full px-2.5'>
      <span className='bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-full'>
        <ShareIcon />
      </span>
      Publish
    </Button>
  )
}

export default ButtonPublishDemo
