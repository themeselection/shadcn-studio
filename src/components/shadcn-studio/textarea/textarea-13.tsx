import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaWithOverlappingLabelDemo = () => {
  const id = useId()

  return (
    <div className='relative w-full max-w-xs space-y-2'>
      <Label
        htmlFor={id}
        className='bg-background text-foreground absolute top-0 left-2 z-10 block -translate-y-1/2 px-1 text-xs font-medium group-has-disabled:opacity-50'
      >
        Textarea with overlapping label
      </Label>
      <Textarea id={id} className='!bg-background' />
    </div>
  )
}

export default TextareaWithOverlappingLabelDemo
