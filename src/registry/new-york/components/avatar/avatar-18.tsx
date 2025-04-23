import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const AvatarGroupTooltipTransitionDemo = () => {
  return (
    <div className='flex -space-x-2 hover:space-x-1'>
      {avatars.map((avatar, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className='ring-background ring-2 transition-all duration-300 ease-in-out'>
                <AvatarImage src={avatar.src} alt={avatar.name} />
                <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{avatar.name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

export default AvatarGroupTooltipTransitionDemo
