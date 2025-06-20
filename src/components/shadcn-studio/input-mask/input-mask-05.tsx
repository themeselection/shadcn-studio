'use client'

import { useId } from 'react'

import { usePaymentInputs } from 'react-payment-inputs'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputCVCCodeDemo = () => {
  const id = useId()
  const { getCVCProps } = usePaymentInputs()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>CVC code</Label>
      <Input {...getCVCProps()} id={id} />
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

export default InputCVCCodeDemo
