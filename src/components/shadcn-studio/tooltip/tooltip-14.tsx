import { FileQuestionIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const HoverCardAlertDemo = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant='link'>Hover Card Alert</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-72'>
        <div className='flex flex-col items-center text-center'>
          <span className='bg-destructive/10 mb-2.5 flex size-12 items-center justify-center rounded-full'>
            <FileQuestionIcon className='text-destructive size-6' />
          </span>
          <div className='mb-1 text-lg font-medium'>File is corrupted</div>
          <p className='text-sm'>It might have some virus or something that might be harmful for your device. </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardAlertDemo
