'use client'

import { useState, useEffect } from 'react'

import { Upload, XIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york/ui/alert'
import { Button } from '@/registry/new-york/ui/button'
import { Progress } from '@/registry/new-york/ui/progress'

const AlertFileUploadDemo = () => {
  const [isActive, setIsActive] = useState(true)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isActive) return null

  return (
    <Alert className='flex justify-between'>
      <Upload />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>Uploading your &apos;Img-234.png&apos;</AlertTitle>
          <AlertDescription>Please wait While we upload your image.</AlertDescription>
        </div>
        <Progress
          value={progress}
          className='bg-sky-600/20 *:bg-sky-600 dark:bg-sky-400/20 dark:*:bg-sky-400'
          aria-label='Upload Progress'
        />
        <div className='flex items-center gap-4'>
          <Button variant='ghost' className='h-7 cursor-pointer rounded-md px-2'>
            Cancel
          </Button>
          <Button
            variant='ghost'
            disabled
            className='h-7 cursor-pointer rounded-md px-2 text-sky-600 hover:bg-sky-600/10 hover:text-sky-600 dark:text-sky-400 dark:hover:bg-sky-400/10 dark:hover:text-sky-400'
          >
            Upload another
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

export default AlertFileUploadDemo
