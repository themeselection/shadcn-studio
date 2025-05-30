import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSolidWarningDemo = () => {
  return (
    <Alert className='border-none bg-amber-600 text-white dark:bg-amber-400'>
      <CircleAlert />
      <AlertTitle>Some details are missing</AlertTitle>
      <AlertDescription className='text-white/80'>Complete your profile to get the best experience.</AlertDescription>
    </Alert>
  )
}

export default AlertSolidWarningDemo
