import { ChevronRightIcon, PanelsTopLeftIcon, PlusIcon, UserIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const users = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    bio: 'Senior Product Manager with 8+ years of experience in SaaS product development and team leadership.',
    projects: 5,
    followers: 120
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    bio: 'Full-stack Software Engineer specializing in React, Node.js, and cloud architecture solutions.',
    projects: 3,
    followers: 95,
    followed: true
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    bio: 'Creative UI/UX Designer with expertise in user research, wireframing, and accessible interface design.',
    projects: 4,
    followers: 80
  }
]

const CollapsibleProfileDemo = () => {
  return (
    <ul className='flex w-full max-w-[350px] flex-col gap-4'>
      {users.map(user => (
        <Collapsible key={user.name} asChild>
          <li className='flex flex-col gap-2'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4'>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage src={user.image} alt={user.fallback} />
                  <AvatarFallback>{user.fallback}</AvatarFallback>
                </Avatar>
                <span className='font-medium'>{user.name}</span>
              </div>
              <ChevronRightIcon className='size-4 transition-transform [[data-state=open]_&]:rotate-90' />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='flex flex-col gap-2'>
                <p className='text-muted-foreground text-sm'>{user.bio}</p>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-2'>
                      <UserIcon className='size-4' />
                      <span className='text-sm'>{user.followers}</span>
                    </span>
                    <span className='flex items-center gap-2'>
                      <PanelsTopLeftIcon className='size-4' />
                      <span className='text-sm'>{user.projects}</span>
                    </span>
                  </div>
                  {user.followed ? (
                    <Button variant='outline' className='h-7 rounded-full px-3 py-1 text-xs'>
                      Following
                    </Button>
                  ) : (
                    <Button className='h-7 rounded-full px-3 py-1 text-xs'>
                      Follow
                      <PlusIcon />
                    </Button>
                  )}
                </div>
              </div>
            </CollapsibleContent>
          </li>
        </Collapsible>
      ))}
    </ul>
  )
}

export default CollapsibleProfileDemo
