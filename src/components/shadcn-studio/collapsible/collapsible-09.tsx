'use client'

import { useId } from 'react'

import { ChevronDownIcon, CreditCardIcon } from 'lucide-react'

import { usePaymentInputs } from 'react-payment-inputs'
import images, { type CardImages } from 'react-payment-inputs/images'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

const CollapsibleFormDemo = () => {
  const id = useId()
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs()

  const items = [
    { value: '1', label: 'Standard 3-5 Days', description: 'Friday, 15 June - Tuesday, 19 June', price: 'Free' },
    { value: '2', label: 'Express', description: 'Friday, 15 June - Sunday, 17 June', price: '$5.00' },
    { value: '3', label: 'Overnight', description: 'Tomorrow', price: '$10.00' }
  ]

  return (
    <div className='w-full space-y-3'>
      <div className='w-full max-w-md space-y-3 rounded-md border py-4'>
        <Collapsible className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-4 px-4'>
            <div className='text-sm font-semibold'>Delivery Address</div>
            <CollapsibleTrigger asChild className='group'>
              <Button variant='ghost' size='icon-sm'>
                <ChevronDownIcon className='text-muted-foreground transition-transform group-data-[state=open]:rotate-180' />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='flex flex-col gap-3 px-4 pt-3'>
            <div className='group relative w-full'>
              <label
                htmlFor='full-name'
                className='origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
              >
                <span className='bg-background inline-flex px-1'>Full Name</span>
              </label>
              <Input id='full-name' type='text' placeholder=' ' className='dark:bg-background' />
            </div>
            <div className='group relative w-full space-y-2'>
              <label
                htmlFor='address'
                className='origin-start text-muted-foreground group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive absolute top-0 block translate-y-2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium'
              >
                <span className='bg-background inline-flex px-1'>Address</span>
              </label>
              <Textarea id='address' placeholder=' ' className='!bg-background' />
            </div>
            <div className='group relative w-full'>
              <label
                htmlFor='pin-code'
                className='origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
              >
                <span className='bg-background inline-flex px-1'>Pin Code</span>
              </label>
              <Input id='pin-code' type='number' placeholder=' ' className='dark:bg-background' />
            </div>
            <div className='group relative w-full'>
              <label
                htmlFor='city-name'
                className='origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
              >
                <span className='bg-background inline-flex px-1'>City</span>
              </label>
              <Input id='city-name' type='text' placeholder=' ' className='dark:bg-background' />
            </div>
            <div className='group relative w-full'>
              <label
                htmlFor='landmark'
                className='origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
              >
                <span className='bg-background inline-flex px-1'>Landmark</span>
              </label>
              <Input id='landmark' type='text' placeholder=' ' className='dark:bg-background' />
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-4 px-4'>
            <div className='text-sm font-semibold'>Delivery Options</div>
            <CollapsibleTrigger asChild className='group'>
              <Button variant='ghost' size='icon-sm'>
                <ChevronDownIcon className='text-muted-foreground transition-transform group-data-[state=open]:rotate-180' />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='flex flex-col gap-2 px-4'>
            <RadioGroup className='w-full gap-0 -space-y-px rounded-md pt-3 shadow-xs' defaultValue='2'>
              {items.map(item => (
                <div
                  key={`${id}-${item.value}`}
                  className='border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10'
                >
                  <div className='flex items-center justify-between gap-1.5'>
                    <div className='flex items-center gap-2'>
                      <RadioGroupItem
                        id={`${id}-${item.value}`}
                        value={item.value}
                        className='after:absolute after:inset-0'
                        aria-label={`plan-radio-${item.value}`}
                        aria-describedby={`${`${id}-${item.value}`}-price`}
                      />
                      <div className='space-y-1'>
                        <Label className='inline-flex items-center' htmlFor={`${id}-${item.value}`}>
                          {item.label}
                        </Label>
                        <p className='text-muted-foreground text-sm'>{item.description}</p>
                      </div>
                    </div>
                    <div
                      id={`${`${id}-${item.value}`}-price`}
                      className='text-muted-foreground text-xs leading-[inherit]'
                    >
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-4 px-4'>
            <div className='text-sm font-semibold'>Payment</div>
            <CollapsibleTrigger asChild className='group'>
              <Button variant='ghost' size='icon-sm'>
                <ChevronDownIcon className='text-muted-foreground transition-transform group-data-[state=open]:rotate-180' />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='flex flex-col gap-2'>
            <div className='w-full space-y-2 px-4 pt-2'>
              <Label>Card details</Label>
              <div>
                <div className='relative focus-within:z-1'>
                  <Input
                    {...getCardNumberProps()}
                    id={`number-${id}`}
                    className='peer rounded-b-none pr-9 shadow-none'
                  />
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
                <div className='-mt-px flex'>
                  <div className='min-w-0 flex-1 focus-within:z-1'>
                    <Input
                      {...getExpiryDateProps()}
                      id={`expiry-${id}`}
                      className='rounded-t-none rounded-r-none shadow-none'
                    />
                  </div>
                  <div className='-ms-px min-w-0 flex-1 focus-within:z-1'>
                    <Input {...getCVCProps()} id={`cvc-${id}`} className='rounded-t-none rounded-l-none shadow-none' />
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
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

export default CollapsibleFormDemo
