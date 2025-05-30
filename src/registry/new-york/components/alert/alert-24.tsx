import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSoftWarningDemo = () => {
  return (
    <Alert className='border-none bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400'>
      <CircleAlert />
      <AlertTitle>This file might be too large</AlertTitle>
      <AlertDescription className='text-amber-600/80 dark:text-amber-400/80'>
        Uploading large files may take longer or fail. Consider compressing it first.
      </AlertDescription>
    </Alert>
  )
}

export default AlertSoftWarningDemo
