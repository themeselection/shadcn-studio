import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertSoftDemo = () => {
  return (
    <Alert className='bg-primary/10 border-none'>
      <CircleAlertIcon />
      <AlertTitle>File Should be PDF,DOCX,JPG, or PNG.</AlertTitle>
      <AlertDescription>If the file type is not one of this than we can&apos;t get your files</AlertDescription>
    </Alert>
  )
}

export default AlertSoftDemo
