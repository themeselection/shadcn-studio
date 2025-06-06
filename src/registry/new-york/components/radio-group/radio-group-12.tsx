import { useId } from 'react'

import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupCardRadioWithBorderDemo = () => {
  const id = useId()

  return (
    <RadioGroup className='w-full max-w-96 gap-2' defaultValue='1'>
      <div className='border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative w-full rounded-md border p-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]'>
        <RadioGroupItem
          value='1'
          id={`${id}-1`}
          className='sr-only'
          aria-label='plan-radio-basic'
          aria-describedby={`${id}-1-description`}
        />

        <Label htmlFor={`${id}-1`} className='text-foreground flex flex-col items-start after:absolute after:inset-0'>
          <div className='flex w-full items-center justify-between'>
            <span>Basic</span>
            <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>Free</span>
          </div>
          <p id={`${id}-1-description`} className='text-muted-foreground text-xs'>
            Get 1 project with 1 teams members.
          </p>
        </Label>
      </div>

      <div className='border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative w-full rounded-md border p-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]'>
        <RadioGroupItem
          value='2'
          id={`${id}-2`}
          className='sr-only'
          aria-label='plan-radio-premium'
          aria-describedby={`${id}-2-description`}
        />

        <Label htmlFor={`${id}-2`} className='text-foreground flex flex-col items-start after:absolute after:inset-0'>
          <div className='flex w-full items-center justify-between'>
            <span>Premium</span>
            <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>$5.00</span>
          </div>
          <p id={`${id}-2-description`} className='text-muted-foreground text-xs'>
            Get 5 projects with 5 team members.
          </p>
        </Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupCardRadioWithBorderDemo
