import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndHelperTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end helper text</Label>
      <Input id={id} type='email' placeholder='Email address' />
      <p className='text-muted-foreground text-end text-xs'>We&apos;ll never share your email with anyone else.</p>
    </div>
  )
}

export default InputEndHelperTextDemo
