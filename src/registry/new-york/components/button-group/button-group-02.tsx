'use client'

import { useState } from 'react'

import { HeartIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

import { cn } from '@/registry/new-york/lib/utils'

const ButtonGroupLikeDemo = () => {
  const [isLiked, setIsLiked] = useState(true)

  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button
        variant='outline'
        className='rounded-none rounded-s-md shadow-none focus-visible:z-10'
        onClick={() => setIsLiked(!isLiked)}
      >
        <HeartIcon className={cn({ 'fill-destructive stroke-destructive': isLiked })} />
        Like
      </Button>
      <span className='bg-background dark:border-input dark:bg-input/30 flex items-center rounded-e-md border px-3 text-sm font-medium'>
        {isLiked ? 46 : 45}
      </span>
    </div>
  )
}

export default ButtonGroupLikeDemo
