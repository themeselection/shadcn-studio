import { DollarSignIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const PopoverPricingDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <DollarSignIcon />
          <span className='sr-only'>Pricing details</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-2.5'>
          <div className='flex items-center justify-between'>
            <span className='text-lg font-semibold'>Enterprise Plan</span>
            <span className='text-sm font-medium'>$49.99/month</span>
          </div>
          <p className='text-sm'>
            Get unlimited access to all features including AI-powered analytics, custom branding, priority support, and
            advanced team collaboration tools.
          </p>
          <div className='flex items-center gap-2'>
            <Badge variant='destructive' className='rounded-sm px-1.5 py-px text-xs'>
              Limited Offer
            </Badge>
            <span className='text-muted-foreground text-xs'>20% discount on annual plan</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverPricingDemo
