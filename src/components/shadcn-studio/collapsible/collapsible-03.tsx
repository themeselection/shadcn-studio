import { ChevronUpIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

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

const CollapsibleListDemo = () => {
  return (
    <Collapsible className='flex w-full max-w-[350px] flex-col items-start gap-4'>
      <div className='font-medium'>Today&apos;s task completion</div>
      <ul className='flex w-full flex-col gap-2'>
        {tasks.slice(0, 2).map(task => (
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
        <CollapsibleContent className='flex flex-col gap-2'>
          {tasks.slice(2).map(task => (
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
        </CollapsibleContent>
      </ul>
      <CollapsibleTrigger asChild>
        <Button variant='outline' size='sm'>
          <span className='[[data-state=open]>&]:hidden'>Show more</span>
          <span className='[[data-state=closed]>&]:hidden'>Show less</span>
          <ChevronUpIcon className='[[data-state=closed]>&]:rotate-180' />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}

export default CollapsibleListDemo
