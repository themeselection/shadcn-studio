import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const IconButtonTooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='icon' className='rounded-full'>
          <PlusIcon />
          <span className='sr-only'>Add new item</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className='px-2 py-1 text-xs'>Add new item</TooltipContent>
    </Tooltip>
  )
}

export default IconButtonTooltipDemo
