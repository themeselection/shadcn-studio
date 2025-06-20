'use client'

import { useId, useRef, useState } from 'react'

import { CircleXIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputClearDemo = () => {
  const [value, setValue] = useState('Click to clear')

  const inputRef = useRef<HTMLInputElement>(null)

  const id = useId()

  const handleClearInput = () => {
    setValue('')

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with clear button</Label>
      <div className='relative'>
        <Input
          ref={inputRef}
          id={id}
          type='text'
          placeholder='Type something...'
          value={value}
          onChange={e => setValue(e.target.value)}
          className='pe-9'
        />
        {value && (
          <Button
            variant='ghost'
            size='icon'
            onClick={handleClearInput}
            className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 end-0 rounded-s-none hover:bg-transparent'
          >
            <CircleXIcon />
            <span className='sr-only'>Clear input</span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default InputClearDemo
