import { CircleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertDemo = () => {
  return (
    <Alert>
      <CircleAlertIcon />
      <AlertTitle>New message!</AlertTitle>
    </Alert>
  )
}

export default AlertDemo
