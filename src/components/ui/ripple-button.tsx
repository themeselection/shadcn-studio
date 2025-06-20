'use client'

import * as React from 'react'

import { motion, type HTMLMotionProps, type Transition } from 'motion/react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface Ripple {
  id: number
  x: number
  y: number
}

interface RippleButtonProps extends HTMLMotionProps<'button'>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  scale?: number
  transition?: Transition
}

function RippleButton({
  ref,
  children,
  onClick,
  className,
  variant,
  size,
  scale = 10,
  transition = { duration: 0.6, ease: 'easeOut' },
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = React.useState<Ripple[]>([])
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement)

  const createRipple = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current

    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y
    }

    setRipples(prev => [...prev, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }, [])

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event)

      if (onClick) {
        onClick(event)
      }
    },
    [createRipple, onClick]
  )

  return (
    <motion.button
      ref={buttonRef}
      data-slot='ripple-button'
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size }), 'relative overflow-hidden', className)}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale, opacity: 0 }}
          transition={transition}
          className='pointer-events-none absolute size-5 rounded-full bg-current'
          style={{
            top: ripple.y - 10,
            left: ripple.x - 10
          }}
        />
      ))}
    </motion.button>
  )
}

export { RippleButton, type RippleButtonProps }
