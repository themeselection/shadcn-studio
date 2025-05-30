import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSolidInfoDemo = () => {
  return (
    <Alert className='border-none bg-sky-600 text-white dark:bg-sky-400'>
      <CircleAlert />
      <AlertTitle>Your profile is visible</AlertTitle>
      <AlertDescription className='text-white/80'>Anyone can view your basic information.</AlertDescription>
    </Alert>
  )
}

export default AlertSolidInfoDemo
