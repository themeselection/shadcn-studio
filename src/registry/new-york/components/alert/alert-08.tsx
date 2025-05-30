'use client'

import { useState } from 'react'

import { CircleAlert, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert'
import { Button } from '@/registry/new-york/ui/button'

const AlertMultipleActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='bg-primary text-primary-foreground flex justify-between border-none'>
      <CircleAlert />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>A new update is available</AlertTitle>
          <AlertDescription className='text-primary-foreground/80'>
            Includes the at new dashboard View. Pages end exports will now load taster
          </AlertDescription>
        </div>
        <div className='flex items-center gap-4'>
          <Button className='bg-secondary/10 focus-visible:bg-secondary/20 hover:bg-secondary/20 h-7 cursor-pointer rounded-md px-2'>
            Skip this update
          </Button>
          <Button variant='secondary' className='h-7 cursor-pointer rounded-md px-2'>
            Install now
          </Button>
        </div>
      </div>
      <button className='size-5 cursor-pointer' onClick={() => setIsActive(false)}>
        <XIcon className='size-5' />
        <span className='sr-only'>Close</span>
      </button>
    </Alert>
  )
}

export default AlertMultipleActionDemo
