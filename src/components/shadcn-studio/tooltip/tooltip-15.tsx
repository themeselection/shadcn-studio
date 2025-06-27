import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const tasks = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    designation: 'Product Manager',
    percentage: 90
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    designation: 'Software Engineer',
    percentage: 60
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    designation: 'UI/UX Designer',
    percentage: 80
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson',
    designation: 'Junior Developer',
    percentage: 15
  }
]

const HoverCardTasksDemo = () => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant='link'>Hover Card Tasks</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-72'>
        <div className='space-y-4'>
          <p className='text-lg font-semibold'>Today&apos;s task completion</p>
          <ul className='space-y-2.5'>
            {tasks.map(task => (
              <li key={task.name} className='flex items-start gap-4'>
                <Avatar>
                  <AvatarImage src={task.image} alt={task.name} />
                  <AvatarFallback>{task.fallback}</AvatarFallback>
                </Avatar>
                <div className='flex flex-1 flex-col'>
                  <div className='text-sm font-medium'>{task.name}</div>
                  <p className='text-muted-foreground text-xs'>{task.designation}</p>
                </div>
                <span className='text-muted-foreground text-sm'>{`${task.percentage}%`}</span>
              </li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardTasksDemo
