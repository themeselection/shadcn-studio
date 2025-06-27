import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipLightDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Light
        </Button>
      </TooltipTrigger>
      <TooltipContent className='bg-zinc-200 text-zinc-950 [&_svg]:bg-zinc-200 [&_svg]:fill-zinc-200'>
        <p>This tooltip will be always light</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipLightDemo
