import { useId } from 'react'

import { MailIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndIconDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end icon</Label>
      <div className='relative'>
        <Input id={id} type='email' placeholder='Email address' className='peer pe-9' />
        <div className='text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50'>
          <MailIcon className='size-4' />
          <span className='sr-only'>Email</span>
        </div>
      </div>
    </div>
  )
}

export default InputEndIconDemo
