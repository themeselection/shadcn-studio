'use client'

import { useId } from 'react'

import { CreditCardIcon } from 'lucide-react'

import { usePaymentInputs } from 'react-payment-inputs'
import images, { type CardImages } from 'react-payment-inputs/images'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputCardDetailsDemo = () => {
  const id = useId()
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label>Card details</Label>
      <div>
        <div className='relative focus-within:z-1'>
          <Input {...getCardNumberProps()} id={`number-${id}`} className='peer rounded-b-none pe-9 shadow-none' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50'>
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
        <div className='-mt-px flex'>
          <div className='min-w-0 flex-1 focus-within:z-1'>
            <Input
              {...getExpiryDateProps()}
              id={`expiry-${id}`}
              className='rounded-e-none rounded-t-none shadow-none'
            />
          </div>
          <div className='-ms-px min-w-0 flex-1 focus-within:z-1'>
            <Input {...getCVCProps()} id={`cvc-${id}`} className='rounded-s-none rounded-t-none shadow-none' />
          </div>
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

export default InputCardDetailsDemo
