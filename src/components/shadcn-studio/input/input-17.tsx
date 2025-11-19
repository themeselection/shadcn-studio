import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndTextAddOnDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end text add-on</Label>
      <div className='relative'>
        <Input id={id} type='text' placeholder='shadcnstudio' className='peer pr-13' />
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-sm peer-disabled:opacity-50'>
          .com
        </span>
      </div>
    </div>
  )
}

export default InputEndTextAddOnDemo
