'use client'

import { useState } from 'react'

import { CheckIcon, CopyIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

const PopoverSlideInLeftDemo = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('SUMMER25OFF')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Slide-in from left</Button>
      </PopoverTrigger>
      <PopoverContent className='data-[state=open]:slide-in-from-left-20 data-[state=closed]:slide-out-to-left-20 data-[state=open]:slide-in-from-top-0 data-[state=closed]:slide-out-to-top-0 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-80 duration-400'>
        <div className='flex flex-col items-center gap-4'>
          <div className='space-y-1 text-center'>
            <div className='text-lg font-semibold'>Summer Sale Discount</div>
            <p className='text-sm'>Scan this code at checkout for 25% off</p>
          </div>
          <div className='aspect-square rounded-xl border p-2'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/popover/qr-code.png?height=152'
              alt='Discount QR Code'
              className='size-38 rounded-md'
            />
          </div>
          <div className='flex w-full items-center gap-1.5'>
            <Separator className='flex-1' />
            <span className='text-muted-foreground text-xs'>or use coupon code</span>
            <Separator className='flex-1' />
          </div>
          <div className='flex w-full gap-2'>
            <Input
              type='text'
              placeholder='Discount code'
              defaultValue='SUMMER25OFF'
              className='disabled:bg-muted'
              disabled
            />
            <Button variant='outline' size='icon' className='relative' onClick={handleCopy}>
              <span className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
                <CheckIcon className='stroke-green-600 dark:stroke-green-400' />
              </span>
              <span
                className={cn(
                  'absolute left-2.25 transition-all',
                  copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                )}
              >
                <CopyIcon />
              </span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverSlideInLeftDemo
