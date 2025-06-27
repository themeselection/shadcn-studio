import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipDirectionsDemo = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='sm'>
            Left
          </Button>
        </TooltipTrigger>
        <TooltipContent side='left'>Tooltip on left</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='sm'>
            Top
          </Button>
        </TooltipTrigger>
        <TooltipContent side='top'>Tooltip on top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='sm'>
            Bottom
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Tooltip on bottom</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='sm'>
            Right
          </Button>
        </TooltipTrigger>
        <TooltipContent side='right'>Tooltip on right</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TooltipDirectionsDemo
