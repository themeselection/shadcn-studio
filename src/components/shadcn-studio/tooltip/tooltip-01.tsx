import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Default
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a simple tooltip</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipDemo
