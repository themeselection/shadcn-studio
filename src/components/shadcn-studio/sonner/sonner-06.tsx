'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SonnerWithActionDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast('Action completed successfully!', {
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo')
          }
        })
      }
    >
      Toast with action
    </Button>
  )
}

export default SonnerWithActionDemo
