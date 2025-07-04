'use client'

import { TruckIcon } from 'lucide-react'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SonnerWithIconDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast(
          <div className='flex items-center gap-2'>
            <TruckIcon className='size-5.5 shrink-0' />
            Your order has been successfully placed, and your parcel is on its way.
          </div>
        )
      }
    >
      Toast with icon
    </Button>
  )
}

export default SonnerWithIconDemo
