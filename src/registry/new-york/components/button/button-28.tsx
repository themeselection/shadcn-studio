'use client'

import { useState } from 'react'

import { CheckIcon, CopyIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

import { cn } from '@/registry/new-york/lib/utils'

const ButtonCopyStateDemo = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('Thank you for using Shadcn Studio!')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Button variant='outline' className='relative disabled:opacity-100' onClick={handleCopy} disabled={copied}>
      <span className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <CheckIcon className='stroke-green-600 dark:stroke-green-400' />
      </span>
      <span className={cn('absolute start-4 transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <CopyIcon />
      </span>
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  )
}

export default ButtonCopyStateDemo
