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

const listItems = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'AD',
    name: 'Angel Dorwart',
    mail: 'sbaker@hotmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    fallback: 'SR',
    name: 'Skylar Rosser',
    mail: 'gbaker@yahoo.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    fallback: 'DB',
    name: 'Dulce Botosh',
    mail: 'tlee@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    fallback: 'AS',
    name: 'Ahmad Stanton',
    mail: 'kdavis@hotmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    fallback: 'RG',
    name: 'Randy Gouse',
    mail: 'ijackson@yahoo.com'
  }
]

const DropdownMenuItemActionDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menu item with action</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-91'>
        <DropdownMenuLabel>Contact List</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index} className='justify-between'>
              <Avatar>
                <AvatarImage src={item.src} alt={item.name} />
                <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
              </Avatar>
              <div className='flex flex-1 flex-col'>
                <span className='text-popover-foreground'>{item.name}</span>
                <span className='text-muted-foreground text-xs'>{item.mail}</span>
              </div>
              <Button variant='secondary' className='h-7 cursor-pointer rounded-md px-2'>
                Send
              </Button>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <Button className='grow'>Add Contact</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuItemActionDemo
