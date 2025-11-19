import { ChevronDownIcon, ChevronUpIcon, ChevronsUpIcon, EqualIcon, ChevronsDownIcon } from 'lucide-react'

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
    icon: ChevronsUpIcon,
    color: 'text-destructive',
    priority: 'Highest'
  },
  {
    icon: ChevronUpIcon,
    color: 'text-destructive/60',
    priority: 'High'
  },
  {
    icon: EqualIcon,
    color: 'text-amber-600 dark:text-amber-400',
    priority: 'Medium'
  },
  {
    icon: ChevronDownIcon,
    color: 'text-green-600/60 dark:text-green-400/60',
    priority: 'Low'
  },
  {
    icon: ChevronsDownIcon,
    color: 'text-green-600 dark:text-green-400',
    priority: 'Lowest'
  }
]

const DropdownMenuBorderedMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Bordered Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 shadow-none'>
        <DropdownMenuLabel>Task priority</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <item.icon className={item.color} />
              {item.priority}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuBorderedMenuDemo
