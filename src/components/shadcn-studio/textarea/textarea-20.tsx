import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaReadOnlyDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Read only textarea</Label>
      <Textarea
        className='read-only:bg-muted'
        defaultValue='Read only text'
        placeholder='Type your feedback here'
        id={id}
        readOnly
      />
    </div>
  )
}

export default TextareaReadOnlyDemo
