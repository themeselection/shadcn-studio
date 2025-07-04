'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SonnerWithPromiseDemo = () => {
  const promise = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('foo')
        } else {
          reject('fox')
        }
      }, 2000)
    )

  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.promise(promise, {
          loading: 'Loading...',
          success: 'Toast has been added successfully!',
          error: 'Oops, there was an error adding the toast.'
        })
      }
    >
      Toast with promise
    </Button>
  )
}

export default SonnerWithPromiseDemo
