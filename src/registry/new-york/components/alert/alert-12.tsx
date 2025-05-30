import { UserRoundX } from 'lucide-react'

import { Alert, AlertTitle } from '@/registry/new-york/ui/alert'

const AlertIndicatorDestructiveDemo = () => {
  return (
    <Alert className='border-destructive bg-destructive/10 text-destructive rounded-none border-0 border-l-6'>
      <UserRoundX />
      <AlertTitle>Your request to join the team is denied.</AlertTitle>
    </Alert>
  )
}

export default AlertIndicatorDestructiveDemo
