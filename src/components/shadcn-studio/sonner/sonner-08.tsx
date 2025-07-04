'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SonnerPositionDemo = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Button
        variant='outline'
        onClick={() =>
          toast('Action completed successfully!', {
            position: 'top-left'
          })
        }
      >
        Top Left
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast('Action completed successfully!', {
            position: 'top-center'
          })
        }
      >
        Top Center
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast('Action completed successfully!', {
            position: 'top-right'
          })
        }
      >
        Top Right
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast('Action completed successfully!', {
            position: 'bottom-left'
          })
        }
      >
        Bottom Left
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast('Action completed successfully!', {
            position: 'bottom-center'
          })
        }
      >
        Bottom Center
      </Button>
      <Button
        variant='outline'
        onClick={() =>
          toast('Action completed successfully!', {
            position: 'bottom-right'
          })
        }
      >
        Bottom Right
      </Button>
    </div>
  )
}

export default SonnerPositionDemo
