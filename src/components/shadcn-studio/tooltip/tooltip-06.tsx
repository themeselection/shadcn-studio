import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipRoundedDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Rounded
        </Button>
      </TooltipTrigger>
      <TooltipContent className='rounded-full'>
        <p>This tooltip is rounded</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipRoundedDemo
