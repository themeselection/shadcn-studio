import { TriangleAlert } from 'lucide-react'

import { Alert, AlertTitle } from '@/registry/new-york/ui/alert'

const AlertDestructiveDemo = () => {
  return (
    <Alert variant='destructive'>
      <TriangleAlert />
      <AlertTitle>Something went wrong!</AlertTitle>
    </Alert>
  )
}

export default AlertDestructiveDemo
