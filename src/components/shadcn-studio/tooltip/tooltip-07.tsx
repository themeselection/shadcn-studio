import { InfoIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipContentDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Content
        </Button>
      </TooltipTrigger>
      <TooltipContent className='max-w-64 py-3 text-pretty'>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <InfoIcon className='size-4' />
            <p className='text-sm font-medium'>Accessibility First</p>
          </div>
          <p className='text-background/80'>
            Tooltips should supplement the UI, not hide critical information. Ensure all important content is visible
            without requiring tooltip interaction.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipContentDemo
