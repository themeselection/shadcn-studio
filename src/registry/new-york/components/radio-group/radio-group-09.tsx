import { useId } from 'react'

import { Badge } from '@/registry/new-york/ui/badge'
import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupListGroupDemo = () => {
  const id = useId()

  const items = [
    { value: '1', label: 'Pro', price: '$39/mo' },
    { value: '2', label: 'Team', price: '$69/mo' },
    { value: '3', label: 'Enterprise', price: 'Custom' }
  ]

  return (
    <RadioGroup className='w-full max-w-96 gap-0 -space-y-px rounded-md shadow-xs' defaultValue='2'>
      {items.map(item => (
        <div
          key={`${id}-${item.value}`}
          className='border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10'
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className='after:absolute after:inset-0'
                aria-label={`plan-radio-${item.value}`}
                aria-describedby={`${`${id}-${item.value}`}-price`}
              />
              <Label className='inline-flex items-center' htmlFor={`${id}-${item.value}`}>
                {item.label}
                {item.value === '2' && <Badge className='px-1.5 py-px text-xs'>Best Seller</Badge>}
              </Label>
            </div>
            <div id={`${`${id}-${item.value}`}-price`} className='text-muted-foreground text-xs leading-[inherit]'>
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupListGroupDemo
