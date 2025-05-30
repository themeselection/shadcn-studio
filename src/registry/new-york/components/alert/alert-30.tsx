import { TriangleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'

const AlertSolidDestructiveDemo = () => {
  return (
    <Alert className='bg-destructive dark:bg-destructive/60 border-none text-white'>
      <TriangleAlert />
      <AlertTitle>Couldn&apos;t save changes</AlertTitle>
      <AlertDescription className='text-white/80'>Please try again or reload the page.</AlertDescription>
    </Alert>
  )
}

export default AlertSolidDestructiveDemo
