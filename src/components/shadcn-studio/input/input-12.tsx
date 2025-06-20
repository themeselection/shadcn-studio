import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputErrorDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with error</Label>
      <Input
        id={id}
        type='email'
        placeholder='Email address'
        className='peer'
        defaultValue='invalid@email.com'
        aria-invalid
      />
      <p className='text-muted-foreground peer-aria-invalid:text-destructive text-xs'>This email is invalid.</p>
    </div>
  )
}

export default InputErrorDemo
