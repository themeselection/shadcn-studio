import { useId } from 'react'

import { SendHorizonalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndInlineButtonDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end inline button</Label>
      <div className='relative'>
        <Input id={id} type='email' placeholder='Email address' className='pe-9' />
        <Button
          variant='ghost'
          size='icon'
          className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 end-0 rounded-s-none hover:bg-transparent'
        >
          <SendHorizonalIcon />
          <span className='sr-only'>Subscribe</span>
        </Button>
      </div>
    </div>
  )
}

export default InputEndInlineButtonDemo
