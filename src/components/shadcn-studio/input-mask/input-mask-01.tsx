'use client'

import { useId } from 'react'

import { withMask } from 'use-mask-input'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputWithMaskDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with mask</Label>
      <Input
        id={id}
        type='text'
        placeholder='AB12 CDE'
        ref={withMask('AA99 AAA', {
          placeholder: '_',
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

export default InputWithMaskDemo
