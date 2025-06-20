import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertSolidDemo = () => {
  return (
    <Alert className='bg-primary text-primary-foreground border-none'>
      <CircleAlertIcon />
      <AlertTitle>Editing your profile</AlertTitle>
      <AlertDescription className='text-primary-foreground/80'>
        Changes won&apos;t be saved until you click “Update.”
      </AlertDescription>
    </Alert>
  )
}

export default AlertSolidDemo
