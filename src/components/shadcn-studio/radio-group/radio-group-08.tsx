import { useId } from 'react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupChipDemo = () => {
  const id = useId()

  const items = [
    { value: '1', label: 'Size: 6 (UK)' },
    { value: '2', label: 'Size: 7 (UK)', disabled: true },
    { value: '3', label: 'Size: 8 (UK)' },
    { value: '4', label: 'Size: 9 (UK)' },
    { value: '5', label: 'Size: 10 (UK)' }
  ]

  return (
    <fieldset className='w-full max-w-96 space-y-4'>
      <legend className='text-foreground text-sm leading-none font-medium'>Select Shoe Size: </legend>
      <RadioGroup className='grid grid-cols-3 gap-2' defaultValue='1'>
        {items.map(item => (
          <label
            key={`${id}-${item.value}`}
            className='border-input has-data-[state=checked]:border-primary/80 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50'
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className='sr-only after:absolute after:inset-0'
              aria-label={`size-radio-${item.value}`}
              disabled={item.disabled}
            />
            <p className='text-foreground text-sm leading-none font-medium'>{item.label}</p>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}

export default RadioGroupChipDemo
