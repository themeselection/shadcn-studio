'use client'

import { useEffect, useState } from 'react'

import { DownloadIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'

import { cn } from '@/lib/utils'

const PopoverDownloadDemo = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isCanceled, setIsCanceled] = useState(false)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (open && !hasStarted && !isCanceled) {
      setHasStarted(true)
    }
  }, [open, hasStarted, isCanceled])

  useEffect(() => {
    if (!hasStarted || isPaused || isCanceled) return

    const timer = setInterval(() => {
      setValue(prev => {
        if (prev < 100) {
          return Math.min(100, prev + Math.floor(Math.random() * 10) + 1)
        } else {
          clearInterval(timer)

          return prev
        }
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [open, isPaused, isCanceled, hasStarted])

  const getText = () => {
    if (isCanceled) return 'Download Canceled'
    if (isPaused) return 'Download Paused'
    if (value === 100) return 'Download Complete'

    return 'Downloading File'
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <DownloadIcon />
          <span className='sr-only'>Download File</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='flex items-center gap-2'>
            <div className='relative flex size-6 items-center justify-center'>
              <span
                className={cn('border-primary absolute inset-0 rounded-full border border-dashed', {
                  'animate-spin [animation-duration:3s]': value < 100 && !isPaused && !isCanceled
                })}
              />
              <DownloadIcon className='z-1 size-3' />
            </div>
            <span className='flex-1 text-sm font-medium'>{getText()}</span>
            {!isCanceled && <span className='text-sm font-semibold'>{`${value}%`}</span>}
          </div>
          <Progress value={value} className='w-full' />
          <div className='grid grid-cols-2 gap-2'>
            <Button size='sm' onClick={() => setIsPaused(!isPaused)} disabled={value === 100 || isCanceled}>
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button
              variant='secondary'
              size='sm'
              onClick={() => {
                if (value < 100) {
                  setValue(0)
                  setIsCanceled(true)
                  setHasStarted(false)
                }

                setOpen(false)
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverDownloadDemo
