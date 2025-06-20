'use client'

import { useState } from 'react'

import { CircleAlertIcon, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertClosableDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='flex justify-between'>
      <CircleAlertIcon />
      <div className='flex-1 flex-col justify-center gap-1'>
        <AlertTitle>New message!</AlertTitle>
        <AlertDescription>12 unread messages. Tap to see.</AlertDescription>
      </div>
      <button className='cursor-pointer' onClick={() => setIsActive(false)}>
        <XIcon className='size-5' />
        <span className='sr-only'>Close</span>
      </button>
    </Alert>
  )
}

export default AlertClosableDemo
