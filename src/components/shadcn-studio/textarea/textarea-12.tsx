import { useId } from 'react'

import { HomeIcon } from 'lucide-react'

import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const TextareaEndIconDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Textarea with end icon</Label>
      <div className='relative'>
        <div className='text-muted-foreground pointer-events-none absolute end-0 top-2.5 flex items-center justify-center pe-3 peer-disabled:opacity-50'>
          <HomeIcon className='size-4' />
          <span className='sr-only'>Address</span>
        </div>
        <Textarea id={id} placeholder='Address' className='peer pe-9' />
      </div>
    </div>
  )
}

export default TextareaEndIconDemo
