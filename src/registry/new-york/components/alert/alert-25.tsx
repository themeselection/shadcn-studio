import { TriangleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSoftDestructiveDemo = () => {
  return (
    <Alert className='bg-destructive/10 text-destructive border-none'>
      <TriangleAlert />
      <AlertTitle>Upload failed</AlertTitle>
      <AlertDescription className='text-destructive/80'>
        Something went wrong. Please try again or use a different file format.
      </AlertDescription>
    </Alert>
  )
}

export default AlertSoftDestructiveDemo
