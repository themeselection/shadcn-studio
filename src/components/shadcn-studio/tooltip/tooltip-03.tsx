import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipNoArrowDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          No arrow
        </Button>
      </TooltipTrigger>
      <TooltipContent className='[&_svg]:invisible'>
        <p>This tooltip don&apos;t have arrow</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipNoArrowDemo
