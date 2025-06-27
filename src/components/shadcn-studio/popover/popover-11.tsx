'use client'

import { useState } from 'react'

import { BellIcon, CircleIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

const notifications = [
  {
    id: 1,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    message: 'Harry assigned you task of New API implementation',
    fallback: 'HL',
    time: '15 Minutes'
  },
  {
    id: 2,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    message: 'Jerry joined team',
    fallback: 'OS',
    time: '35 Minutes'
  },
  {
    id: 3,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    message: 'Congratulate ruby for married life',
    fallback: 'HR',
    time: '3 days'
  }
]

const PopoverNotificationsDemo = () => {
  const [readMessages, setReadMessages] = useState([3])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <BellIcon />
          <span className='sr-only'>Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80 p-0'>
        <div className='grid'>
          <div className='flex items-center justify-between gap-2 px-4 py-2.5'>
            <span className='font-medium'>Notifications</span>
            <Button
              variant='secondary'
              className='h-7 rounded-full px-2 py-1 text-xs'
              onClick={() => setReadMessages(notifications.map(item => item.id))}
            >
              Mark as all read
            </Button>
          </div>
          <Separator className='' />
          <ul className='grid gap-4 p-2'>
            {notifications.map(item => (
              <li
                key={item.id}
                className='hover:bg-accent flex items-start gap-2 rounded-lg px-2 py-1.5'
                onClick={() => setReadMessages([...readMessages, item.id])}
              >
                <Avatar className='rounded-lg'>
                  <AvatarImage src={item.image} alt={item.fallback} />
                  <AvatarFallback className='rounded-lg text-xs'>{item.fallback}</AvatarFallback>
                </Avatar>
                <div className='flex-1 space-y-1'>
                  <div className='text-sm font-medium'>{item.message}</div>
                  <p className='text-muted-foreground text-xs'>{`${item.time} ago`}</p>
                </div>
                {!readMessages.includes(item.id) && (
                  <CircleIcon className='fill-primary text-primary size-2 self-center' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverNotificationsDemo
