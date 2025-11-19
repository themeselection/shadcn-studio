import { PencilLineIcon, UploadIcon, Trash2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const DropdownMenuAlignStartDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Align Start</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-34'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilLineIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UploadIcon />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant='destructive'>
            <Trash2Icon />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuAlignStartDemo
