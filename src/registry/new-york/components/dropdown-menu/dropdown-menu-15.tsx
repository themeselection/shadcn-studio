import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/registry/new-york/ui/dropdown-menu'

const DropdownSlideLeftAnimationDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Slide Left Animation</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        className='data-[state=closed]:slide-out-to-left-20 data-[state=open]:slide-in-from-left-20 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-56 duration-400'
      >
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>My Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>FAQs</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Contact</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Call Support</DropdownMenuItem>
          <DropdownMenuItem>Chat with us</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownSlideLeftAnimationDemo
