import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipAvatarDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline' size='sm'>
          Avatar
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className='flex items-center gap-1.5'>
          <Avatar className='size-5'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>HR</AvatarFallback>
          </Avatar>
          <p className='font-medium'>Hallie Richards</p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipAvatarDemo
