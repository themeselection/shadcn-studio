import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertSoftWarningDemo = () => {
  return (
    <Alert className='border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400'>
      <CircleAlertIcon />
      <AlertTitle>This file might be too large</AlertTitle>
      <AlertDescription className='text-amber-600/80 dark:text-amber-400/80'>
        Uploading large files may take longer or fail. Consider compressing it first.
      </AlertDescription>
    </Alert>
  )
}

export default AlertSoftWarningDemo
