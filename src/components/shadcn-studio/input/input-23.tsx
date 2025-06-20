import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputOverlappingLabelDemo = () => {
  const id = useId()

  return (
    <div className='group relative w-full max-w-xs'>
      <Label
        htmlFor={id}
        className='bg-background text-foreground absolute start-2 top-0 z-1 block -translate-y-1/2 px-1 text-xs'
      >
        Input with overlapping label
      </Label>
      <Input id={id} type='email' placeholder='Email address' className='dark:bg-background h-10' />
    </div>
  )
}

export default InputOverlappingLabelDemo
