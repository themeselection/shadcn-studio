import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipErrorDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Error
        </Button>
      </TooltipTrigger>
      <TooltipContent className='bg-destructive [&_svg]:bg-destructive [&_svg]:fill-destructive text-white'>
        <p>This is an error tooltip</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipErrorDemo
