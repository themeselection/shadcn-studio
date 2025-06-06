'use client'

import { useId, useState, type ComponentProps } from 'react'

import { CheckIcon, MinusIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { Label } from '@/registry/new-york/ui/label'

const Checkbox = (props: ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className='peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <MinusIcon className='hidden size-2.5 group-data-[state=indeterminate]:block' />
        <CheckIcon className='hidden size-3.5 group-data-[state=checked]:block' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

const CheckboxIndeterminateDemo = () => {
  const [checked, setChecked] = useState<CheckboxPrimitive.CheckedState>('indeterminate')

  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor={id}>Indeterminate checkbox</Label>
    </div>
  )
}

export default CheckboxIndeterminateDemo
