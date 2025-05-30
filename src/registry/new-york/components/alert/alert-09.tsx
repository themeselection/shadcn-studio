'use client'

import { useState, useEffect } from 'react'

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Progress } from '@/registry/new-york/ui/progress'

const AlertTaskDemo = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Alert className='flex gap-3'>
      <Avatar className='rounded-sm'>
        <AvatarImage
          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          alt='Hallie Richards'
          className='rounded-sm'
        />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <div className='flex flex-1 flex-col gap-2'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>@Rocky</AlertTitle>
          <AlertDescription>this projects task is remaining, deadline is near.</AlertDescription>
        </div>
        <Progress
          value={progress}
          className='bg-amber-600/20 *:bg-amber-600 dark:bg-amber-400/20 dark:*:bg-amber-400'
          aria-label='Task progress'
        />
      </div>
    </Alert>
  )
}

export default AlertTaskDemo
