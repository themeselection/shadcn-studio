import { PencilLine, Upload, Trash2 } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'

const DropdownMenuAlignStartDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Align Start</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-34'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PencilLine />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Upload />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant='destructive'>
            <Trash2 />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuAlignStartDemo
