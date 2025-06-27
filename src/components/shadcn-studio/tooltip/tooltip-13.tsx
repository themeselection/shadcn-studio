import { CalendarIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'

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
  }
]

const HoverCardProjectDemo = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant='link'>Hover Card Project</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className='space-y-3'>
          <div className='flex items-center justify-between gap-2 text-sm font-semibold'>
            <span>Resume project completion</span>
            <span>25%</span>
          </div>
          <Progress value={25} />
          <p className='text-sm'>Developing platform where ai will generate resume automatically Ai</p>
          <div className='text-muted-foreground flex items-center gap-2 text-xs'>
            <CalendarIcon className='size-4' />
            <span>Started in December 2024</span>
          </div>
          <div className='flex -space-x-2'>
            {avatars.map((avatar, index) => (
              <Avatar key={index} className='ring-background ring-2'>
                <AvatarImage src={avatar.src} alt={avatar.name} />
                <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
            <Avatar className='ring-background ring-2'>
              <AvatarFallback className='text-xs'>+6</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardProjectDemo
