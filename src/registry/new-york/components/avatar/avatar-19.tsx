import { PlusIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'

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
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'DR',
    name: 'Darlene Robertson'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'LA',
    name: 'Leslie Alexander'
  }
]

const AvatarGroupDropdownDemo = () => {
  return (
    <div className='flex -space-x-2'>
      {avatars.slice(0, 3).map((avatar, index) => (
        <Avatar key={index} className='ring-background ring-2'>
          <AvatarImage src={avatar.src} alt={avatar.name} />
          <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='has-focus-visible:ring-ring/50 ring-background ring-2'>
            <AvatarFallback asChild>
              <button className='cursor-pointer'>
                <PlusIcon className='size-4' />
              </button>
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {avatars.slice(3).map((avatar, index) => (
            <DropdownMenuItem key={index}>
              <Avatar>
                <AvatarImage src={avatar.src} alt={avatar.name} />
                <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
              </Avatar>
              <span>{avatar.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AvatarGroupDropdownDemo
