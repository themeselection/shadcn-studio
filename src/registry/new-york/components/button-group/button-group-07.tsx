'use client'

import { useState } from 'react'

import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupNumberDemo = () => {
  const [value, setValue] = useState(216)

  return (
    <div className='divide-primary-foreground/30 inline-flex w-fit divide-x rounded-md shadow-xs'>
      <Button
        size='icon'
        className='rounded-none rounded-s-full shadow-none focus-visible:z-10'
        onClick={() => {
          setValue(value - 1)
        }}
      >
        <MinusIcon />
        <span className='sr-only'>Minus</span>
      </Button>
      <span className='bg-primary text-primary-foreground inline-flex items-center px-3 py-2 text-sm font-medium'>
        {`${value}px`}
      </span>
      <Button
        size='icon'
        className='rounded-none rounded-e-full shadow-none focus-visible:z-10'
        onClick={() => {
          setValue(value + 1)
        }}
      >
        <PlusIcon />
        <span className='sr-only'>Plus</span>
      </Button>
    </div>
  )
}

export default ButtonGroupNumberDemo
