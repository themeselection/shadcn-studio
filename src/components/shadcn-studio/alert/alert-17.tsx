import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const AlertDescriptionDemo = () => {
  return (
    <Alert>
      <CircleAlertIcon />
      <AlertTitle>Creating your account</AlertTitle>
      <AlertDescription>Fill in your details to get started.</AlertDescription>
    </Alert>
  )
}

export default AlertDescriptionDemo
