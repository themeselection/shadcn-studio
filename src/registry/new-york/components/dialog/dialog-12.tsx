'use client'

import { useEffect, useRef, useState } from 'react'

import { CheckIcon, MailIcon } from 'lucide-react'

import { OTPInput, type SlotProps } from 'input-otp'

import { Button } from '@/registry/new-york/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/registry/new-york/ui/dialog'

import { cn } from '@/registry/new-york/lib/utils'

const CORRECT_CODE = '11208'

const DialogOTPVerificationDemo = () => {
  const [value, setValue] = useState('')
  const [hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined)
  const inputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus()
    }
  }, [hasGuessed])

  async function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.()

    inputRef.current?.select()
    await new Promise(r => setTimeout(r, 1_00))

    setHasGuessed(value === CORRECT_CODE)

    setValue('')
    setTimeout(() => {
      inputRef.current?.blur()
    }, 20)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>OTP code</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <div className='flex flex-col items-center gap-2'>
          <div
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-600/10 dark:bg-sky-400/100',
              { 'bg-green-600/10 dark:bg-green-400/10': hasGuessed }
            )}
            aria-hidden='true'
          >
            {hasGuessed ? (
              <CheckIcon className='text-green-600 dark:text-green-400' strokeWidth={1} />
            ) : (
              <MailIcon className='text-sky-600 dark:text-sky-400' strokeWidth={1} />
            )}
          </div>
          <DialogHeader>
            <DialogTitle className='sm:text-center'>
              {hasGuessed ? 'Account verified!' : 'Check Your Email'}
            </DialogTitle>
            <DialogDescription className='sm:text-center'>
              {hasGuessed ? (
                <span>
                  Congratulations! your email account <strong>exa**le@gmail.com</strong> has been verified
                </span>
              ) : (
                <span>
                  We have sent a verification code to <strong>exa**le@gmail.com</strong>. Please check your inbox and
                  input the code below to activate your account. Try {CORRECT_CODE}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
        </div>

        {hasGuessed ? (
          <div className='text-center'>
            <DialogClose asChild>
              <Button type='button' ref={closeButtonRef}>
                Continue
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className='space-y-4'>
            <div className='flex justify-center'>
              <OTPInput
                id='confirmation-code'
                ref={inputRef}
                value={value}
                onChange={setValue}
                containerClassName='flex items-center gap-3 has-disabled:opacity-50'
                maxLength={5}
                onFocus={() => setHasGuessed(undefined)}
                render={({ slots }) => (
                  <div className='flex gap-2'>
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                )}
                onComplete={onSubmit}
              />
            </div>
            {hasGuessed === false && (
              <p className='text-muted-foreground text-center text-xs' role='alert' aria-live='polite'>
                Invalid code. Please try again.
              </p>
            )}
            <p className='text-center text-sm'>
              Didn&apos;t get a code?{' '}
              <a className='text-sky-600 hover:underline dark:text-sky-400' href='#'>
                Resend
              </a>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        'border-input bg-background text-foreground flex size-9 items-center justify-center rounded-md border font-medium shadow-xs transition-[color,box-shadow]',
        { 'border-ring ring-ring/50 z-10 ring-[3px]': props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  )
}

export default DialogOTPVerificationDemo
