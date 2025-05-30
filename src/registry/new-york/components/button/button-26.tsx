'use client'

import { useState } from 'react'

import { LoaderCircleIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

import { cn } from '@/registry/new-york/lib/utils'

const ButtonPromiseDemo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<undefined | string>(undefined)

  const handleClick = async () => {
    setIsLoading(true)
    setStatus(undefined)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus(Math.random() > 0.5 ? 'Submitted!' : 'Rejected!')
    } catch (error) {
      setStatus('Rejected!')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant='link'
      onClick={handleClick}
      disabled={isLoading}
      className={cn('cursor-pointer hover:no-underline', {
        'text-green-600 dark:text-green-400': status === 'Submitted!',
        'text-destructive': status === 'Rejected!'
      })}
    >
      {isLoading ? (
        <>
          <LoaderCircleIcon className='animate-spin' />
          Loading
        </>
      ) : status ? (
        status
      ) : (
        'Click me'
      )}
    </Button>
  )
}

export default ButtonPromiseDemo
