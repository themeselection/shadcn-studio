import React from 'react'

import { cn } from '@/registry/new-york/lib/utils'

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group animate-rainbow text-primary-foreground focus-visible:ring-ring/50 relative inline-flex size-9 cursor-pointer items-center justify-center rounded-md border-2 border-transparent bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] font-medium transition-colors focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',

          // before styles
          'before:animate-rainbow before:absolute before:bottom-[-20%] before:left-0 before:z-0 before:h-1/5 before:w-full before:bg-[linear-gradient(90deg,#ff4242,#a1ff42,#42a1ff,#42d0ff,#a142ff)] before:[filter:blur(calc(0.625*1rem))]',

          // bg styles
          'bg-[linear-gradient(var(--primary),var(--primary)),linear-gradient(var(--primary)_30%,rgba(0,0,0,0)),linear-gradient(90deg,#ff4242,#a1ff42,#42a1ff,#42d0ff,#a142ff)]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

RainbowButton.displayName = 'RainbowButton'
