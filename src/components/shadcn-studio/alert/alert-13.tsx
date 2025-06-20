import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertWithActionDemo = () => {
  return (
    <Alert className='flex items-center justify-between [&>svg]:translate-y-0'>
      <CircleAlertIcon />
      <AlertTitle className='flex-1'>New message!</AlertTitle>
      <Button variant='outline' className='h-7 cursor-pointer rounded-md px-2'>
        Open
      </Button>
    </Alert>
  )
}

export default AlertWithActionDemo
