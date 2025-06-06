import { useId } from 'react'

import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupCardRadioDemo = () => {
  const id = useId()

  return (
    <RadioGroup className='w-full max-w-96 gap-2' defaultValue='1'>
      <div className='border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-center gap-2 rounded-md border p-4 shadow-xs outline-none'>
        <RadioGroupItem
          value='1'
          id={`${id}-1`}
          aria-label='plan-radio-basic'
          aria-describedby={`${id}-1-description`}
          className='size-5 after:absolute after:inset-0 [&_svg]:size-3'
        />
        <div className='grid grow gap-2'>
          <Label htmlFor={`${id}-1`} className='justify-between'>
            Basic <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>Free</span>
          </Label>
          <p id={`${id}-1-description`} className='text-muted-foreground text-xs'>
            Get 1 project with 1 teams members.
          </p>
        </div>
      </div>

      <div className='border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-center gap-2 rounded-md border p-4 shadow-xs outline-none'>
        <RadioGroupItem
          value='2'
          id={`${id}-2`}
          aria-describedby={`${id}-2-description`}
          className='size-5 after:absolute after:inset-0 [&_svg]:size-3'
        />
        <div className='grid grow gap-2'>
          <Label htmlFor={`${id}-2`} className='justify-between'>
            Premium <span className='text-muted-foreground text-xs leading-[inherit] font-normal'>$5.00</span>
          </Label>
          <p id={`${id}-2-description`} className='text-muted-foreground text-xs'>
            Get 5 projects with 5 team members.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupCardRadioDemo
