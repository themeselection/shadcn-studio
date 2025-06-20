import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputReadOnlyDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Read-only input</Label>
      <Input
        id={id}
        type='email'
        placeholder='Email address'
        defaultValue='example@xyz.com'
        className='read-only:bg-muted'
        readOnly
      />
    </div>
  )
}

export default InputReadOnlyDemo
