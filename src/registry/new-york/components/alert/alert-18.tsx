import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertOutlineInfoDemo = () => {
  return (
    <Alert className='border-sky-600 text-sky-600 dark:border-sky-400 dark:text-sky-400'>
      <CircleAlert />
      <AlertTitle>Verify your email to activate your account</AlertTitle>
      <AlertDescription className='text-sky-600/80 dark:text-sky-400/80'>
        We&apos;ve sent a confirmation link to your inbox. Check your email to complete the sign-up.
      </AlertDescription>
    </Alert>
  )
}

export default AlertOutlineInfoDemo
