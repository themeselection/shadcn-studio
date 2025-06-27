'use client'

import { useState } from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const CollapsibleShowMoreDemo = () => {
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(true)
  const [isCancelOrderOpen, setIsCancelOrderOpen] = useState(false)

  return (
    <div className='w-full space-y-4'>
      <div className='space-y-2'>
        <p className='font-medium'>How can I track my order?</p>
        <Collapsible open={isTrackOrderOpen} onOpenChange={setIsTrackOrderOpen} className='space-y-2'>
          <CollapsibleContent>
            <p className='text-sm'>
              To track your order, simply log in to your account and navigate to the order history section. You&apos;ll
              find detailed information about your order status and tracking number there.
            </p>
          </CollapsibleContent>
          <CollapsibleTrigger>
            <span className='text-muted-foreground text-sm underline'>
              {isTrackOrderOpen ? 'Hide answer' : 'Show answer'}
            </span>
          </CollapsibleTrigger>
        </Collapsible>
      </div>
      <div className='space-y-2'>
        <p className='font-medium'>Can I cancel my order?</p>
        <Collapsible open={isCancelOrderOpen} onOpenChange={setIsCancelOrderOpen} className='space-y-2'>
          <CollapsibleContent>
            <p className='text-sm'>
              Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
            </p>
          </CollapsibleContent>
          <CollapsibleTrigger>
            <span className='text-muted-foreground text-sm underline'>
              {isCancelOrderOpen ? 'Hide answer' : 'Show answer'}
            </span>
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </div>
  )
}

export default CollapsibleShowMoreDemo
