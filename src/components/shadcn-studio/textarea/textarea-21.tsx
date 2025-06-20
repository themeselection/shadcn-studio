import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaDisabledDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Disabled textarea</Label>
      <Textarea placeholder='Type your feedback here' disabled id={id} />
    </div>
  )
}

export default TextareaDisabledDemo
