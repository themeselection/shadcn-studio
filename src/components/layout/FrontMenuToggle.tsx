// Third-party Imports
import { Menu } from 'lucide-react'

// Component Imports
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const FrontMenuToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='cursor-pointer lg:hidden'>
          <Menu className='size-5' />
          <span className='sr-only'>Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href='/theme-generator' className='cursor-pointer'>
              Theme Generator
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/docs/getting-started/introduction' className='cursor-pointer'>
              Docs
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/components' className='cursor-pointer'>
              Components
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FrontMenuToggle
