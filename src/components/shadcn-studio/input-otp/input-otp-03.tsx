import { useId } from 'react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

const InputOTPWithResendDemo = () => {
  const id = useId()

  return (
    <div className='space-y-3'>
      <Label htmlFor={id}>Input OTP with resend</Label>
      <InputOTP id={id} maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className='text-muted-foreground text-xs'>
        Didn&apos;t get the code?{' '}
        <a href='#' className='text-primary hover:underline'>
          Resend code
        </a>
      </p>
    </div>
  )
}

export default InputOTPWithResendDemo
