import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputStartAddOnDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with start add-on</Label>
      <div className='flex rounded-md shadow-xs'>
        <span className='border-input bg-background text-muted-foreground -z-1 inline-flex items-center rounded-l-md border px-3 text-sm'>
          https://
        </span>
        <Input id={id} type='text' placeholder='shadcnstudio.com' className='-ms-px rounded-l-none shadow-none' />
      </div>
    </div>
  )
}

export default InputStartAddOnDemo
