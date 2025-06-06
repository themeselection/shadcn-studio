import { AlignJustify, Heading1, Heading2, Pencil, TextSearch } from 'lucide-react'

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
    icon: Heading1,
    property: 'Heading 1',
    description: 'big section or hero heading'
  },
  {
    icon: Heading2,
    property: 'Heading 2',
    description: 'Sub section heading'
  },
  {
    icon: AlignJustify,
    property: 'Align justify',
    description: 'text will fill all area'
  },
  {
    icon: TextSearch,
    property: 'text search',
    description: 'find any text'
  }
]

const DropdownMenuEditMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <Pencil />
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
