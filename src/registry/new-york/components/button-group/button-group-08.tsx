import { ExternalLinkIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupPreviewDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button variant='outline' className='rounded-none rounded-s-md shadow-none focus-visible:z-10' asChild>
        <a href='#'>Live preview</a>
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='rounded-none rounded-e-md shadow-none focus-visible:z-10'
        asChild
      >
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <ExternalLinkIcon />
          <span className='sr-only'>External link</span>
        </a>
      </Button>
    </div>
  )
}

export default ButtonGroupPreviewDemo
