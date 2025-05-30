import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle } from '@/registry/new-york/ui/alert'

const AlertDemo = () => {
  return (
    <Alert>
      <CircleAlert />
      <AlertTitle>New message!</AlertTitle>
    </Alert>
  )
}

export default AlertDemo
