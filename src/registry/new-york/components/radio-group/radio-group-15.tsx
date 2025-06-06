import { CircleIcon } from 'lucide-react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { Label } from '@/registry/new-york/ui/label'

const RadioGroupAnimatedInsetDemo = () => {
  return (
    <RadioGroupPrimitive.Root data-slot='radio-group' defaultValue='english' className='grid gap-3'>
      <div className='flex items-center gap-2'>
        <RadioGroupPrimitive.Item
          value='english'
          id='lang-english'
          data-slot='radio-group-item'
          className='border-input focus-visible:border-ring focus-visible:ring-ring/50 text-primary-foreground [&_svg]:fill-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary! relative aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow,border] outline-none focus-visible:ring-[3px] [&_svg]:size-4 data-[state=checked]:[&_svg]:size-2'
        >
          <CircleIcon className='fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500' />
        </RadioGroupPrimitive.Item>
        <Label htmlFor='lang-english'>English</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupPrimitive.Item
          value='spanish'
          id='lang-spanish'
          data-slot='radio-group-item'
          className='border-input focus-visible:border-ring focus-visible:ring-ring/50 text-primary-foreground [&_svg]:fill-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary! relative aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow,border] outline-none focus-visible:ring-[3px] [&_svg]:size-4 data-[state=checked]:[&_svg]:size-2'
        >
          <CircleIcon className='fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500' />
        </RadioGroupPrimitive.Item>
        <Label htmlFor='lang-spanish'>Español</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupPrimitive.Item
          value='french'
          id='lang-french'
          data-slot='radio-group-item'
          className='border-input focus-visible:border-ring focus-visible:ring-ring/50 text-primary-foreground [&_svg]:fill-primary-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary! relative aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow,border] outline-none focus-visible:ring-[3px] [&_svg]:size-4 data-[state=checked]:[&_svg]:size-2'
        >
          <CircleIcon className='fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500' />
        </RadioGroupPrimitive.Item>
        <Label htmlFor='lang-french'>Français</Label>
      </div>
    </RadioGroupPrimitive.Root>
  )
}

export default RadioGroupAnimatedInsetDemo
