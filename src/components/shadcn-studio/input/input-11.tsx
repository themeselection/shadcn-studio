import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputHintTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <div className='flex items-center justify-between gap-1'>
        <Label htmlFor={id}>Input with hint text</Label>
        <span className='text-muted-foreground text-xs'>Optional field</span>
      </div>
      <Input id={id} type='email' placeholder='Email address' />
    </div>
  )
}

export default InputHintTextDemo
