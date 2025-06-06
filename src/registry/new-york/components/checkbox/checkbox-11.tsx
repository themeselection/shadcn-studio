import { HeartIcon, CircleIcon, StarIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const CheckboxCustomIconsDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='group focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3'
        aria-label='Heart icon'
      >
        <span className='group-data-[state=checked]:hidden'>
          <HeartIcon className='stroke-1' />
        </span>
        <span className='group-data-[state=unchecked]:hidden'>
          <HeartIcon className='fill-destructive stroke-destructive stroke-1' />
        </span>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='group focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3'
        aria-label='Star icon'
      >
        <span className='group-data-[state=checked]:hidden'>
          <StarIcon className='stroke-1' />
        </span>
        <span className='group-data-[state=unchecked]:hidden'>
          <StarIcon className='fill-amber-500 stroke-amber-500 stroke-1 dark:fill-amber-400 dark:stroke-amber-400' />
        </span>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='group focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-3'
        aria-label='Circle icon'
      >
        <span className='group-data-[state=checked]:hidden'>
          <CircleIcon className='stroke-1' />
        </span>
        <span className='group-data-[state=unchecked]:hidden'>
          <CircleIcon className='fill-green-600 stroke-green-600 stroke-1 dark:fill-green-400 dark:stroke-green-400' />
        </span>
      </CheckboxPrimitive.Root>
    </div>
  )
}

export default CheckboxCustomIconsDemo
