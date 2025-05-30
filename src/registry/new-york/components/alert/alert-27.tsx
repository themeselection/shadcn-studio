import { CheckCheck } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSolidSuccessDemo = () => {
  return (
    <Alert className='border-none bg-green-600 text-white dark:bg-green-400'>
      <CheckCheck />
      <AlertTitle>Profile updated</AlertTitle>
      <AlertDescription className='text-white/80'>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  )
}

export default AlertSolidSuccessDemo
