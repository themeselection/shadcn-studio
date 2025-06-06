'use client'

import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'
import { Switch } from '@/registry/new-york/ui/switch'

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

const DropdownMeetingScheduleDemo = () => {
  const [firstMeeting, setFirstMeeting] = useState(false)
  const [secondMeeting, setSecondMeeting] = useState(true)
  const [thirdMeeting, setThirdMeeting] = useState(false)
  const [forthMeeting, setForthMeeting] = useState(true)
  const [fifthMeeting, setFifthMeeting] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Meetings Schedule</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='sm:w-124'>
        <DropdownMenuLabel>Today&apos;s meetings</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className='justify-between gap-3.5' onSelect={event => event.preventDefault()}>
            <span className='text-popover-foreground font-medium'>08:30</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Daily Project Review</span>
              <span className='text-muted-foreground text-xs'>Team organization</span>
            </div>
            <Avatar className='max-sm:hidden'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png' alt='Hallie Richards' />
              <AvatarFallback className='text-xs'>Angel</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' checked={firstMeeting} onCheckedChange={setFirstMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onSelect={event => event.preventDefault()}>
            <span className='text-popover-foreground font-medium'>09:00</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Sprint Surge</span>
              <span className='text-muted-foreground text-xs'>Daily Boost for Agile Progress</span>
            </div>
            <div className='flex -space-x-3 max-sm:hidden'>
              {avatars.map((avatar, index) => (
                <Avatar key={index} className='ring-background ring-2'>
                  <AvatarImage src={avatar.src} alt={avatar.name} />
                  <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' checked={secondMeeting} onCheckedChange={setSecondMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onSelect={event => event.preventDefault()}>
            <span className='text-popover-foreground font-medium'>11:45</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Project Status Update</span>
              <span className='text-muted-foreground text-xs'>Progress Overview Update</span>
            </div>
            <Avatar className='max-sm:hidden'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png' alt='Hallie Richards' />
              <AvatarFallback className='text-xs'>Angel</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' checked={thirdMeeting} onCheckedChange={setThirdMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onSelect={event => event.preventDefault()}>
            <span className='text-popover-foreground font-medium'>06:30</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Team Performance</span>
              <span className='text-muted-foreground text-xs'>Team Metrics Evaluation</span>
            </div>
            <div className='flex -space-x-3 max-sm:hidden'>
              {avatars.map((avatar, index) => (
                <Avatar key={index} className='ring-background ring-2'>
                  <AvatarImage src={avatar.src} alt={avatar.name} />
                  <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' checked={forthMeeting} onCheckedChange={setForthMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onSelect={event => event.preventDefault()}>
            <span className='text-popover-foreground font-medium'>10:50</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Stakeholder Feedback</span>
              <span className='text-muted-foreground text-xs'>Feedback from Stakeholders</span>
            </div>
            <Avatar className='max-sm:hidden'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png' alt='Hallie Richards' />
              <AvatarFallback className='text-xs'>Angel</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' checked={fifthMeeting} onCheckedChange={setFifthMeeting} />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMeetingScheduleDemo
