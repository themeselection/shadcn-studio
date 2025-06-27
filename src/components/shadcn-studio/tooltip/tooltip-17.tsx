import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/global-tooltip'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
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

const GlobalTooltipDemo = () => {
  return (
    <div className='space-y-4'>
      <div className='flex -space-x-2'>
        <TooltipProvider>
          {avatars.map((avatar, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Avatar className='ring-background size-10 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:scale-105'>
                  <AvatarImage src={avatar.src} alt={avatar.name} />
                  <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>{avatar.name}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <p className='text-muted-foreground text-xs'>
        Inspired by{' '}
        <a
          className='hover:text-foreground underline'
          href='https://animate-ui.com/docs/components/tooltip'
          target='_blank'
          rel='noopener noreferrer'
        >
          Animate UI
        </a>
      </p>
    </div>
  )
}

export default GlobalTooltipDemo
