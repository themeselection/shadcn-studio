import { ChevronUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const CollapsibleCardDemo = () => {
  return (
    <Card className='w-full max-w-md pb-0'>
      <Collapsible>
        <div className='flex items-center justify-between px-6 pb-6'>
          <CardTitle>How do I track my order?</CardTitle>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button variant='outline' size='sm'>
                <span className='[[data-state=open]>&]:hidden'>Show</span>
                <span className='[[data-state=closed]>&]:hidden'>Hide</span>
                <ChevronUpIcon className='[[data-state=closed]>&]:rotate-180' />
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </div>
        <CollapsibleContent>
          <CardContent className='space-y-2 px-0'>
            <p className='px-6'>You&apos;ll receive tracking information via email once your order ships.</p>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-1.jpg?width=446&format=auto'
              alt='Banner'
              className='aspect-video h-70 rounded-b-xl object-cover'
            />
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

export default CollapsibleCardDemo
