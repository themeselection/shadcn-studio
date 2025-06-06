import { PauseIcon, PlayIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'

const ButtonGroupRoundedDemo = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className='divide-primary-foreground/30 inline-flex w-fit divide-x rounded-full shadow-xs'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='rounded-none rounded-s-full shadow-none focus-visible:z-10'>
              <SkipBackIcon />
              <span className='sr-only'>Skip Back</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Skip Back</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='rounded-none shadow-none focus-visible:z-10'>
              <PlayIcon />
              <span className='sr-only'>Play</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Play</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='rounded-none shadow-none focus-visible:z-10'>
              <PauseIcon />
              <span className='sr-only'>Pause</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Pause</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='rounded-none rounded-e-full shadow-none focus-visible:z-10'>
              <SkipForwardIcon />
              <span className='sr-only'>Skip Forward</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Skip Forward</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export default ButtonGroupRoundedDemo
