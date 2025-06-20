import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputAddOnsDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with add-ons</Label>
      <div className='flex rounded-md shadow-xs'>
        <span className='border-input bg-background text-muted-foreground -z-1 inline-flex items-center rounded-s-md border px-3 text-sm'>
          https://
        </span>
        <Input id={id} type='text' placeholder='shadcnstudio' className='-mx-px rounded-none shadow-none' />
        <span className='border-input bg-background text-muted-foreground -z-1 inline-flex items-center rounded-e-md border px-3 text-sm'>
          .com
        </span>
      </div>
    </div>
  )
}

export default InputAddOnsDemo
