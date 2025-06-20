import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaRequiredDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>
        Required textarea <span className='text-destructive'>*</span>
      </Label>
      <Textarea placeholder='Type your feedback here' id={id} required />
    </div>
  )
}

export default TextareaRequiredDemo
