import { AlignJustifyIcon, Heading1Icon, Heading2Icon, PencilIcon, TextSearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const listItems = [
  {
    icon: Heading1Icon,
    property: 'Heading 1',
    description: 'big section or hero heading'
  },
  {
    icon: Heading2Icon,
    property: 'Heading 2',
    description: 'Sub section heading'
  },
  {
    icon: AlignJustifyIcon,
    property: 'Align justify',
    description: 'text will fill all area'
  },
  {
    icon: TextSearchIcon,
    property: 'text search',
    description: 'find any text'
  }
]

const DropdownMenuEditMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <PencilIcon />
          <span className='sr-only'>Edit menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Edit text</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <span className='flex items-center justify-center rounded-md border p-2'>
                <item.icon />
              </span>
              <div className='flex flex-col'>
                <span className='text-popover-foreground'>{item.property}</span>
                <span className='text-muted-foreground text-xs'>{item.description}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuEditMenuDemo
