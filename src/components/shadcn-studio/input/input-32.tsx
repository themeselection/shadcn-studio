import { useId } from 'react'

import { DownloadIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputIconButtonDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with icon button</Label>
      <div className='flex rounded-md shadow-xs'>
        <Input
          id={id}
          type='email'
          placeholder='Email address'
          className='-me-px rounded-e-none shadow-none focus-visible:z-1'
        />
        <Button variant='outline' size='icon' className='rounded-s-none'>
          <DownloadIcon />
          <span className='sr-only'>Download</span>
        </Button>
      </div>
    </div>
  )
}

export default InputIconButtonDemo
