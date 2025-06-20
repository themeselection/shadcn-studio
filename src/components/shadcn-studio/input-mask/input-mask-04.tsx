'use client'

import { useId } from 'react'

import { usePaymentInputs } from 'react-payment-inputs'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputExpiryDateDemo = () => {
  const id = useId()
  const { getExpiryDateProps } = usePaymentInputs()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Expiry date</Label>
      <Input {...getExpiryDateProps()} id={id} />
      <p className='text-muted-foreground text-xs'>
        Built with{' '}
        <a
          className='hover:text-foreground underline'
          href='https://github.com/medipass/react-payment-inputs'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  )
}

export default InputExpiryDateDemo
