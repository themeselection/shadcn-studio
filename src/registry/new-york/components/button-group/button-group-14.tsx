import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupRevealDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button
        variant='outline'
        className='group w-20 justify-start gap-3 overflow-hidden rounded-none rounded-s-md shadow-none transition-all duration-200 not-hover:w-10 hover:bg-sky-500/10 hover:text-sky-500 focus-visible:z-10 dark:hover:bg-sky-400/10 dark:hover:text-sky-400'
      >
        <ThumbsUpIcon />
        Like
      </Button>
      <Button
        variant='outline'
        className='hover:bg-destructive/10! group hover:text-destructive w-24.5 justify-end gap-3 overflow-hidden rounded-none rounded-e-md shadow-none transition-all duration-200 not-hover:w-10 focus-visible:z-10'
      >
        Dislike
        <ThumbsDownIcon />
      </Button>
    </div>
  )
}

export default ButtonGroupRevealDemo
