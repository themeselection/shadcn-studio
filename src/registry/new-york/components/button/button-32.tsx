import { PlusIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'

const IconButtonTooltipDemo = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon' className='rounded-full'>
            <PlusIcon />
            <span className='sr-only'>Add new item</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Add new item</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default IconButtonTooltipDemo
