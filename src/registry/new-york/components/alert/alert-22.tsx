import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSoftInfoDemo = () => {
  return (
    <Alert className='border-none bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400'>
      <CircleAlert />
      <AlertTitle>Only certain file types are allowed</AlertTitle>
      <AlertDescription className='text-sky-600/80 dark:text-sky-400/80'>
        You can upload PDF, DOCX, JPG, or PNG files up to 20MB.
      </AlertDescription>
    </Alert>
  )
}

export default AlertSoftInfoDemo
