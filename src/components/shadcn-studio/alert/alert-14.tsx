import { TriangleAlertIcon } from 'lucide-react'

import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertDestructiveDemo = () => {
  return (
    <Alert variant='destructive'>
      <TriangleAlertIcon />
      <AlertTitle>Something went wrong!</AlertTitle>
    </Alert>
  )
}

export default AlertDestructiveDemo
