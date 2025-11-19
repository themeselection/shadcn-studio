'use client'

import { useState } from 'react'

import { CheckIcon } from 'lucide-react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const users = [
  {
    id: 1,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'PG',
    name: 'Phillip George',
    mail: 'phillip12@gmail.com'
  },
  {
    id: 2,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'JD',
    name: 'Jaylon Donin',
    mail: 'jaylo-don@yahoo.com'
  },
  {
    id: 3,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'TC',
    name: 'Tiana Curtis',
    mail: 'Tiana_curtis@gmail.com'
  }
]

const DropdownMenuUserSwitcherDemo = () => {
  const [selectUser, setSelectUser] = useState(users[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='bg-secondary flex items-center gap-2 rounded-lg px-3 py-2.5'>
        <Avatar>
          <AvatarImage src={selectUser.src} alt={selectUser.name} />
          <AvatarFallback className='text-xs'>{selectUser.fallback}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-1 text-start leading-none'>
          <span className='max-w-[17ch] truncate text-sm leading-none font-semibold'>{selectUser.name}</span>
          <span className='text-muted-foreground max-w-[20ch] truncate text-xs'>{selectUser.mail}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-66'>
        <DropdownMenuLabel>Task Assignment</DropdownMenuLabel>
        {users.map(user => (
          <DropdownMenuItem key={user.id} onClick={() => setSelectUser(user)}>
            <div className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage src={user.src} alt={user.name} />
                <AvatarFallback className='text-xs'>{user.fallback}</AvatarFallback>
              </Avatar>
              <div className='flex flex-col gap-1 text-start leading-none'>
                <span className='max-w-[17ch] truncate text-sm leading-none font-semibold'>{user.name}</span>
                <span className='text-muted-foreground max-w-[20ch] truncate text-xs'>{user.mail}</span>
              </div>
            </div>
            {selectUser.id === user.id && <CheckIcon className='ml-auto' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuUserSwitcherDemo
