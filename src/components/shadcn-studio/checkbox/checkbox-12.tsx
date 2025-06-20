import { CircleCheckIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const CheckboxFilledIconDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='peer bg-destructive data-[state=checked]:text-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 size-7 shrink-0 rounded-full shadow-xs transition-shadow outline-none focus-visible:ring-[3px]'
        aria-label='Color destructive'
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <CircleCheckIcon className='size-5.5 fill-white stroke-current' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='peer size-7 shrink-0 rounded-full bg-sky-600 shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-sky-600/20 data-[state=checked]:text-sky-600 dark:bg-sky-400 dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:text-sky-400'
        aria-label='Color info'
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <CircleCheckIcon className='size-5.5 fill-white stroke-current' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <CheckboxPrimitive.Root
        data-slot='checkbox'
        defaultChecked
        className='peer size-7 shrink-0 rounded-full bg-green-600 shadow-xs transition-shadow outline-none focus-visible:ring-[3px] focus-visible:ring-green-600/20 data-[state=checked]:text-green-600 dark:bg-green-400 dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:text-green-400'
        aria-label='Color success'
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <CircleCheckIcon className='size-5.5 fill-white stroke-current' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  )
}

export default CheckboxFilledIconDemo
