'use client'

import { useId, useState, type ChangeEvent } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const maxLength = 50
const initialValue = ''

const InputCharacterLimitDemo = () => {
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
      <Label htmlFor={id}>Input with character limit</Label>
      <div className='relative'>
        <Input
          id={id}
          type='text'
          placeholder='Username'
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          className='peer pr-14'
        />
        <span className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-xs tabular-nums peer-disabled:opacity-50'>
          {characterCount}/{maxLength}
        </span>
      </div>
    </div>
  )
}

export default InputCharacterLimitDemo
