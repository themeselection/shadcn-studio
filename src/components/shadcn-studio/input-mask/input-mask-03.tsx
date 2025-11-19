'use client'

import { useId } from 'react'

import { CreditCardIcon } from 'lucide-react'

import { usePaymentInputs } from 'react-payment-inputs'
import images, { type CardImages } from 'react-payment-inputs/images'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputCardNumberDemo = () => {
  const id = useId()
  const { meta, getCardNumberProps, getCardImageProps } = usePaymentInputs()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Card number</Label>
      <div className='relative'>
        <Input {...getCardNumberProps()} id={id} className='peer pr-11' />
        <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
          {meta.cardType ? (
            <svg
              className='w-6 overflow-hidden'
              {...getCardImageProps({
                images: images as unknown as CardImages
              })}
            />
          ) : (
            <CreditCardIcon className='size-4' />
          )}
          <span className='sr-only'>Card Provider</span>
        </div>
      </div>
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

export default InputCardNumberDemo
