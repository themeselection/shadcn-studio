'use client'

import { useState } from 'react'

import { CircleAlert, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert'

const AlertGradientDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='border-accent-foreground/20 from-accent text-accent-foreground flex justify-between bg-gradient-to-b to-transparent to-60%'>
      <CircleAlert />
      <div className='flex flex-1 flex-col gap-1'>
        <AlertTitle>Verify your email to activate your account</AlertTitle>
        <AlertDescription className='text-accent-foreground/60'>
          We&apos;ve sent a confirmation link to your inbox. Check your email to complete the sign-up.
        </AlertDescription>
      </div>
      <button className='cursor-pointer' onClick={() => setIsActive(false)}>
        <XIcon className='size-5' />
        <span className='sr-only'>Close</span>
      </button>
    </Alert>
  )
}

export default AlertGradientDemo
