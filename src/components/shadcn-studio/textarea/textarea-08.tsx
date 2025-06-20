import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const TextareaWithColoredBorderDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Textarea with colored border and ring</Label>
      <Textarea
        placeholder='Type your feedback here'
        id={id}
        className='focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40'
      />
    </div>
  )
}

export default TextareaWithColoredBorderDemo
