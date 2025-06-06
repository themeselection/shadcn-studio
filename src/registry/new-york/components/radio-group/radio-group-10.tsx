import { useId } from 'react'

import { Badge } from '@/registry/new-york/ui/badge'
import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupSplitListGroupDemo = () => {
  const id = useId()

  const items = [
    { value: '1', label: 'Pro', price: '$39/mo' },
    { value: '2', label: 'Team', price: '$69/mo' },
    { value: '3', label: 'Enterprise', price: 'Custom' }
  ]

  return (
    <RadioGroup className='w-full max-w-96 gap-0 space-y-2 rounded-md *:rounded-full' defaultValue='2'>
      {items.map(item => (
        <div
          key={`${id}-${item.value}`}
          className='border-input has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground relative flex flex-col gap-4 border p-4 outline-none has-data-[state=checked]:z-10'
        >
          <div className='group flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                aria-label={`plan-radio-${item.value}`}
                className='text-primary bg-accent data-[state=checked]:bg-primary-foreground! data-[state=checked]:border-primary-foreground data-[state=checked]:[&_svg]:fill-primary after:absolute after:inset-0'
                aria-describedby={`${`${id}-${item.value}`}-price`}
              />
              <Label className='inline-flex items-center' htmlFor={`${id}-${item.value}`}>
                {item.label}
                {item.value === '2' && (
                  <Badge
                    variant='outline'
                    className='border-green-500 bg-green-500/10 px-1.5 py-px text-xs text-green-500'
                  >
                    Best Seller
                  </Badge>
                )}
              </Label>
            </div>
            <div
              id={`${`${id}-${item.value}`}-price`}
              className='group-has-checked:text-primary-foreground text-xs leading-[inherit]'
            >
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupSplitListGroupDemo
