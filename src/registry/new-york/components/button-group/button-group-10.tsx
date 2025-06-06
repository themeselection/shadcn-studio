import { FlipHorizontalIcon, FlipVerticalIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupDemo = () => {
  return (
    <div className='divide-primary-foreground/30 inline-flex w-fit divide-x rounded-md shadow-xs'>
      <Button size='icon' className='rounded-none rounded-s-md shadow-none focus-visible:z-10'>
        <FlipHorizontalIcon />
        <span className='sr-only'>Flip Horizontal</span>
      </Button>
      <Button size='icon' className='rounded-none rounded-e-md shadow-none focus-visible:z-10'>
        <FlipVerticalIcon />
        <span className='sr-only'>Flip Vertical</span>
      </Button>
    </div>
  )
}

export default ButtonGroupDemo
