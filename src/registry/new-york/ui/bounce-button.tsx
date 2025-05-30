'use client'

import * as React from 'react'

import { motion, type HTMLMotionProps } from 'motion/react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/registry/new-york/lib/utils'
import { buttonVariants } from '@/registry/new-york/ui/button'

interface BounceButtonProps extends HTMLMotionProps<'button'>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

function BounceButton({ children, className, size, variant, ...props }: BounceButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={cn(buttonVariants({ variant, size }), 'transition-none', className)}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { BounceButton, type BounceButtonProps }
