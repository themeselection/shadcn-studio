'use client'

import * as React from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

const SIZES = {
  sm: { TRACK_WIDTH: 26, THUMB_SIZE: 14, THUMB_STRETCH: 18 },
  md: { TRACK_WIDTH: 32, THUMB_SIZE: 16, THUMB_STRETCH: 25 },
  lg: { TRACK_WIDTH: 48, THUMB_SIZE: 24, THUMB_STRETCH: 40 }
}

const STRETCH_DURATION = 120 // ms

type Size = keyof typeof SIZES

interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  size?: Size
}

function Switch({ className, size = 'md', ...props }: SwitchProps) {
  const { TRACK_WIDTH, THUMB_SIZE, THUMB_STRETCH } = SIZES[size]
  const [isChecked, setIsChecked] = React.useState(props.checked ?? props.defaultChecked ?? false)
  const [isStretching, setIsStretching] = React.useState(false)

  React.useEffect(() => {
    if (props.checked !== undefined) setIsChecked(props.checked)
  }, [props.checked])

  React.useEffect(() => {
    setIsStretching(true)
    const timeout = setTimeout(() => setIsStretching(false), STRETCH_DURATION)

    return () => clearTimeout(timeout)
  }, [isChecked])

  const handleCheckedChange = (checked: boolean) => {
    setIsChecked(checked)
    props.onCheckedChange?.(checked)
  }

  const thumbWidth = isStretching ? THUMB_STRETCH : THUMB_SIZE
  const offsetUnchecked = 0
  const offsetChecked = TRACK_WIDTH - thumbWidth - 2

  const thumbLeft = isChecked ? offsetChecked : offsetUnchecked

  return (
    <SwitchPrimitive.Root
      data-slot='switch'
      className={cn(
        `peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,

        // Dynamic width/height
        size === 'sm' ? 'h-4 w-6.5' : size === 'lg' ? 'h-7 w-12' : 'h-[1.15rem] w-8',
        className
      )}
      checked={isChecked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <SwitchPrimitive.Thumb asChild>
        <motion.span
          data-slot='switch-thumb'
          className={cn(
            'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none absolute block rounded-full ring-0'
          )}
          animate={{
            width: thumbWidth,
            left: thumbLeft,
            transition: { duration: STRETCH_DURATION / 1000 }
          }}
          style={{
            height: THUMB_SIZE,
            minWidth: THUMB_SIZE,
            maxWidth: THUMB_STRETCH
          }}
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
