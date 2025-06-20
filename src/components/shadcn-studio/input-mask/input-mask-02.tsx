'use client'

import { useId } from 'react'

import { withMask } from 'use-mask-input'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputTimeDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input time</Label>
      <Input
        id={id}
        type='text'
        placeholder='00:00:00'
        ref={withMask('datetime', {
          placeholder: '_',
          inputFormat: 'HH:MM:ss',
          outputFormat: 'HH:MM:ss',
          showMaskOnHover: false
        })}
      />
      <p className='text-muted-foreground text-xs'>
        Built with{' '}
        <a
          className='hover:text-foreground underline'
          href='https://github.com/eduardoborges/use-mask-input'
          target='_blank'
          rel='noopener noreferrer'
        >
          use-mask-input
        </a>
      </p>
    </div>
  )
}

export default InputTimeDemo
