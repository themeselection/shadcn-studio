'use client'

import { useId, useState, type ChangeEvent } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const maxLength = 12
const initialValue = ''

const InputCharacterLeftDemo = () => {
  const [value, setValue] = useState(initialValue)
  const [characterCount, setCharacterCount] = useState(initialValue.length)

  const id = useId()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value)
      setCharacterCount(e.target.value.length)
    }
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with characters left</Label>
      <Input type='text' placeholder='Username' value={value} maxLength={maxLength} onChange={handleChange} />
      <p className='text-muted-foreground text-xs'>
        <span className='tabular-nums'>{maxLength - characterCount}</span> characters left
      </p>
    </div>
  )
}

export default InputCharacterLeftDemo
