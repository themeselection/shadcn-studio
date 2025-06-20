'use client'

// React Imports
import type { HTMLAttributes } from 'react'

// Component Imports
import Link from 'next/link'

// Util Imports
import { cn } from '@/lib/utils'

export function MainNav({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      <Link
        href='#'
        className='hover:text-primary text-sm font-medium transition-colors'
        onClick={e => e.preventDefault()}
      >
        Overview
      </Link>
      <Link
        href='#'
        className='text-muted-foreground hover:text-primary text-sm font-medium transition-colors'
        onClick={e => e.preventDefault()}
      >
        Customers
      </Link>
      <Link
        href='#'
        className='text-muted-foreground hover:text-primary text-sm font-medium transition-colors'
        onClick={e => e.preventDefault()}
      >
        Products
      </Link>
      <Link
        href='#'
        className='text-muted-foreground hover:text-primary text-sm font-medium transition-colors'
        onClick={e => e.preventDefault()}
      >
        Settings
      </Link>
    </nav>
  )
}
