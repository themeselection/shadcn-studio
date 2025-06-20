import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputFilledDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Filled input</Label>
      <Input id={id} type='email' placeholder='Email address' className='bg-muted border-transparent shadow-none' />
    </div>
  )
}

export default InputFilledDemo
