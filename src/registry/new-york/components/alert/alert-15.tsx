import { TriangleAlert } from 'lucide-react'

import { Alert, AlertTitle } from '@/registry/new-york/ui/alert'

const AlertPureDestructiveDemo = () => {
  return (
    <Alert variant='destructive' className='border-destructive'>
      <TriangleAlert />
      <AlertTitle>Unable to process your payment.</AlertTitle>
    </Alert>
  )
}

export default AlertPureDestructiveDemo
