'use client'

import { useEffect, useId, useState } from 'react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

const InputOTPWithResendTimerDemo = () => {
  const [timeLeft, setTimeLeft] = useState(30)
  const id = useId()

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60

    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleResend = () => {
    setTimeLeft(60)
  }

  return (
    <div className='space-y-3'>
      <Label htmlFor={id}>Input OTP with resend timer</Label>
      <InputOTP id={id} maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className='text-muted-foreground text-xs'>
        {timeLeft > 0 ? (
          `Resend available in ${formatTime(timeLeft)}`
        ) : (
          <a
            href='#'
            onClick={e => {
              e.preventDefault()
              handleResend()
            }}
            className='hover:text-primary underline'
          >
            Resend code
          </a>
        )}
      </p>
    </div>
  )
}

export default InputOTPWithResendTimerDemo
