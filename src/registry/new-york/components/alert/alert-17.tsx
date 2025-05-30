import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertDescriptionDemo = () => {
  return (
    <Alert>
      <CircleAlert />
      <AlertTitle>Creating your account</AlertTitle>
      <AlertDescription>Fill in your details to get started.</AlertDescription>
    </Alert>
  )
}

export default AlertDescriptionDemo
