import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaWithHelperTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Textarea with helper text</Label>
      <Textarea placeholder='Type your feedback here' id={id} />
      <p className='text-muted-foreground text-xs'>Your feedback is useful for us.</p>
    </div>
  )
}

export default TextareaWithHelperTextDemo
