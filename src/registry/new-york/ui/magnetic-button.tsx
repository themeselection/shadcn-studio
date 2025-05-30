'use client'

import * as React from 'react'

import { motion, type HTMLMotionProps, type Transition } from 'motion/react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/registry/new-york/lib/utils'
import { buttonVariants } from '@/registry/new-york/ui/button'

interface Position {
  x: number
  y: number
}

interface MagneticButtonProps extends HTMLMotionProps<'button'>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  scale?: number
  transition?: Transition
}

function MagneticButton({ children, className, size, variant, ...props }: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e
      const { height, width, left, top } = ref.current.getBoundingClientRect()
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)

      setPosition({ x: middleX, y: middleY })
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{
        scale: 0.95
      }}
      className={cn(buttonVariants({ variant, size }), 'relative transition-none', className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { MagneticButton, type MagneticButtonProps }
