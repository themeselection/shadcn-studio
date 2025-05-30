import { CopyIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonCopyDemo = () => {
  return (
    <div className='flex h-11.5 items-center overflow-hidden rounded-full border px-1'>
      <p className='text-muted-foreground max-w-56 truncate overflow-hidden px-2.5 text-sm'>
        https://shadcnstudio.com/docs/components/button
      </p>
      <Button
        size='icon'
        className='rounded-full bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:focus-visible:ring-sky-400/40'
      >
        <CopyIcon />
        <span className='sr-only'>Copy</span>
      </Button>
    </div>
  )
}

export default ButtonCopyDemo
