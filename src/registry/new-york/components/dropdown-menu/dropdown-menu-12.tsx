import { CircleHelp, DollarSign, Receipt, Settings, User } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'

const DropdownMenuItemIconDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Menu item with icon</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>User Profile</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Receipt />
            Billing Plans
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DollarSign />
            Pricing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CircleHelp />
            FAQ
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuItemIconDemo
