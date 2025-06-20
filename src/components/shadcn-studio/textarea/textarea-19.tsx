'use client'

import { useId, useState, type ChangeEvent } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const maxLength = 200
const initialValue = ''

const TextareaCharacterLeftDemo = () => {
  const [value, setValue] = useState(initialValue)
  const [characterCount, setCharacterCount] = useState(initialValue.length)

  const id = useId()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value)
      setCharacterCount(e.target.value.length)
    }
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Textarea with characters left</Label>
      <Textarea placeholder='Type your feedback here' value={value} maxLength={maxLength} onChange={handleChange} />
      <p className='text-muted-foreground text-xs'>
        <span className='tabular-nums'>{maxLength - characterCount}</span> characters left
      </p>
    </div>
  )
}

export default TextareaCharacterLeftDemo
