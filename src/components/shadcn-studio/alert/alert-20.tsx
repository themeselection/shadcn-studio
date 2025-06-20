import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertOutlineWarningDemo = () => {
  return (
    <Alert className='border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400'>
      <CircleAlertIcon />
      <AlertTitle>Your password is too weak</AlertTitle>
      <AlertDescription className='text-amber-600/80 dark:text-amber-400/80'>
        Try using a mix of uppercase letters, numbers, and symbols for better security.
      </AlertDescription>
    </Alert>
  )
}

export default AlertOutlineWarningDemo
