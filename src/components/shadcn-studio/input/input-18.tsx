import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputTextAddOnsDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with text add-ons</Label>
      <div className='relative'>
        <Input id={id} type='text' placeholder='shadcnstudio' className='peer pr-13 pl-17' />
        <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-sm peer-disabled:opacity-50'>
          https://
        </span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-sm peer-disabled:opacity-50'>
          .com
        </span>
      </div>
    </div>
  )
}

export default InputTextAddOnsDemo
