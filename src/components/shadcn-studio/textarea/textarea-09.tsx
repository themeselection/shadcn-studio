import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaFilledDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Filled Textarea</Label>
      <Textarea className='bg-muted border-transparent shadow-none' placeholder='Type your feedback here' id={id} />
    </div>
  )
}

export default TextareaFilledDemo
