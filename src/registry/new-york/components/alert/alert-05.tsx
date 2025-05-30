import { FileWarning } from 'lucide-react'

import { Alert, AlertTitle } from '@/registry/new-york/ui/alert'

const AlertAttachedIconDemo = () => {
  return (
    <Alert className='flex items-stretch p-0'>
      <div className='bg-destructive/10 text-destructive flex items-center rounded-s-[10px] border-r p-2'>
        <FileWarning className='size-4' />
      </div>
      <AlertTitle className='p-3'>This file contains virus!</AlertTitle>
    </Alert>
  )
}

export default AlertAttachedIconDemo
