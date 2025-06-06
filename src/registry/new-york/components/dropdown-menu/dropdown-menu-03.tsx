import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'

const listItems = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'PG',
    name: 'Phillip George',
    message: 'Hii samira, thanks for the...',
    time: '9:00AM',
    newMessages: 1
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'JD',
    name: 'Jaylon Donin',
    message: "I'll send the texts and...",
    time: '10:00PM',
    newMessages: 3
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'TC',
    name: 'Tiana Curtis',
    message: "That's Great!",
    time: '8:30AM',
    newMessages: null
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'ZV',
    name: 'Zaire Vetrovs',
    message: 'https://www.youtub...',
    time: '5:50AM',
    newMessages: 2
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'KP',
    name: 'Kianna Philips',
    message: 'Okay, It was awesome.',
    time: '6.45PM',
    newMessages: null
  }
]

const DropdownMenuItemAvatarDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menu item with avatar</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-91'>
        <DropdownMenuLabel>Chat List</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index} className='justify-between'>
              <Avatar>
                <AvatarImage src={item.src} alt={item.name} />
                <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
              </Avatar>
              <div className='flex flex-1 flex-col'>
                <span className='text-popover-foreground'>{item.name}</span>
                <span className='text-muted-foreground text-xs'>{item.message}</span>
              </div>
              {item.newMessages ? (
                <div className='flex flex-col items-end gap-1'>
                  <span className='text-muted-foreground text-xs'>{item.time}</span>
                  <Badge className='h-5 min-w-5 rounded-full bg-green-600 px-1 dark:bg-green-400'>
                    {item.newMessages}
                  </Badge>
                </div>
              ) : (
                <span className='text-muted-foreground text-xs'>{item.time}</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuItemAvatarDemo
