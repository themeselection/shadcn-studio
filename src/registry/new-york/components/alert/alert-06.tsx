import { FileWarning } from 'lucide-react'

import { Alert, AlertTitle } from '@/registry/new-york/ui/alert'
import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'

const AlertFocusedIconDemo = () => {
  return (
    <Alert className='flex items-center gap-3'>
      <Avatar className='rounded-md'>
        <AvatarFallback className='bg-destructive dark:bg-destructive/60 rounded-md text-white'>
          <FileWarning className='size-4' />
        </AvatarFallback>
      </Avatar>
      <AlertTitle>This file contains virus!</AlertTitle>
    </Alert>
  )
}

export default AlertFocusedIconDemo
