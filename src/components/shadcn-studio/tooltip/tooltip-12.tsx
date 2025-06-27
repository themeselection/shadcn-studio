import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const HoverCardStatsDemo = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant='link'>Hover Card Stats</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-fit'>
        <div className='flex items-center gap-1.5'>
          <div className='flex flex-col gap-1'>
            <div className='text-sm font-medium'>Total page views</div>
            <div className='text-xl font-semibold'>89,400</div>
            <div className='text-muted-foreground text-xs'>21% ↗︎ than last month</div>
          </div>
          <Avatar className='size-10'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>HR</AvatarFallback>
          </Avatar>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardStatsDemo
