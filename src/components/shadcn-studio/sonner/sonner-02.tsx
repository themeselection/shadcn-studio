'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SonnerWithDescriptionDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast('Event is created', {
          description: 'Friday, August 15, 2025 at 9:00 AM'
        })
      }
    >
      Toast with description
    </Button>
  )
}

export default SonnerWithDescriptionDemo
