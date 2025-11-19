'use client'

import * as React from 'react'

import { createPortal } from 'react-dom'
import { motion, AnimatePresence, LayoutGroup, type Transition } from 'motion/react'

import { cn } from '@/lib/utils'

type Side = 'top' | 'bottom' | 'left' | 'right'

type Align = 'start' | 'center' | 'end'

type TooltipData = {
  content: React.ReactNode
  rect: DOMRect
  side: Side
  sideOffset: number
  align: Align
  alignOffset: number
  id: string
  arrow: boolean
}

type GlobalTooltipContextType = {
  showTooltip: (data: TooltipData) => void
  hideTooltip: () => void
  currentTooltip: TooltipData | null
  transition: Transition
  globalId: string
}

const GlobalTooltipContext = React.createContext<GlobalTooltipContextType | undefined>(undefined)

const useGlobalTooltip = () => {
  const context = React.useContext(GlobalTooltipContext)

  if (!context) {
    throw new Error('useGlobalTooltip must be used within a TooltipProvider')
  }

  return context
}

type TooltipPosition = {
  x: number
  y: number
  transform: string
  initial: { x?: number; y?: number }
}

function getTooltipPosition({
  rect,
  side,
  sideOffset,
  align,
  alignOffset
}: {
  rect: DOMRect
  side: Side
  sideOffset: number
  align: Align
  alignOffset: number
}): TooltipPosition {
  switch (side) {
    case 'top':
      if (align === 'start') {
        return {
          x: rect.left + alignOffset,
          y: rect.top - sideOffset,
          transform: 'translate(0, -100%)',
          initial: { y: 15 }
        }
      } else if (align === 'end') {
        return {
          x: rect.right + alignOffset,
          y: rect.top - sideOffset,
          transform: 'translate(-100%, -100%)',
          initial: { y: 15 }
        }
      } else {
        // center
        return {
          x: rect.left + rect.width / 2,
          y: rect.top - sideOffset,
          transform: 'translate(-50%, -100%)',
          initial: { y: 15 }
        }
      }

    case 'bottom':
      if (align === 'start') {
        return {
          x: rect.left + alignOffset,
          y: rect.bottom + sideOffset,
          transform: 'translate(0, 0)',
          initial: { y: -15 }
        }
      } else if (align === 'end') {
        return {
          x: rect.right + alignOffset,
          y: rect.bottom + sideOffset,
          transform: 'translate(-100%, 0)',
          initial: { y: -15 }
        }
      } else {
        // center
        return {
          x: rect.left + rect.width / 2,
          y: rect.bottom + sideOffset,
          transform: 'translate(-50%, 0)',
          initial: { y: -15 }
        }
      }

    case 'left':
      if (align === 'start') {
        return {
          x: rect.left - sideOffset,
          y: rect.top + alignOffset,
          transform: 'translate(-100%, 0)',
          initial: { x: 15 }
        }
      } else if (align === 'end') {
        return {
          x: rect.left - sideOffset,
          y: rect.bottom + alignOffset,
          transform: 'translate(-100%, -100%)',
          initial: { x: 15 }
        }
      } else {
        // center
        return {
          x: rect.left - sideOffset,
          y: rect.top + rect.height / 2,
          transform: 'translate(-100%, -50%)',
          initial: { x: 15 }
        }
      }

    case 'right':
      if (align === 'start') {
        return {
          x: rect.right + sideOffset,
          y: rect.top + alignOffset,
          transform: 'translate(0, 0)',
          initial: { x: -15 }
        }
      } else if (align === 'end') {
        return {
          x: rect.right + sideOffset,
          y: rect.bottom + alignOffset,
          transform: 'translate(0, -100%)',
          initial: { x: -15 }
        }
      } else {
        // center
        return {
          x: rect.right + sideOffset,
          y: rect.top + rect.height / 2,
          transform: 'translate(0, -50%)',
          initial: { x: -15 }
        }
      }
  }
}

type TooltipProviderProps = {
  children: React.ReactNode
  openDelay?: number
  closeDelay?: number
  transition?: Transition
}

function TooltipProvider({
  children,
  openDelay = 150,
  closeDelay = 100,
  transition = { type: 'spring', stiffness: 300, damping: 25 }
}: TooltipProviderProps) {
  const globalId = React.useId()
  const [currentTooltip, setCurrentTooltip] = React.useState<TooltipData | null>(null)
  const timeoutRef = React.useRef<number>(null)
  const lastCloseTimeRef = React.useRef<number>(0)

  const showTooltip = React.useCallback(
    (data: TooltipData) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      if (currentTooltip !== null) {
        setCurrentTooltip(data)

        return
      }

      const now = Date.now()
      const delay = now - lastCloseTimeRef.current < closeDelay ? 0 : openDelay

      timeoutRef.current = window.setTimeout(() => setCurrentTooltip(data), delay)
    },
    [openDelay, closeDelay, currentTooltip]
  )

  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      setCurrentTooltip(null)
      lastCloseTimeRef.current = Date.now()
    }, closeDelay)
  }, [closeDelay])

  const hideImmediate = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setCurrentTooltip(null)
    lastCloseTimeRef.current = Date.now()
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', hideImmediate, true)

    return () => window.removeEventListener('scroll', hideImmediate, true)
  }, [hideImmediate])

  return (
    <GlobalTooltipContext.Provider
      value={{
        showTooltip,
        hideTooltip,
        currentTooltip,
        transition,
        globalId
      }}
    >
      <LayoutGroup>{children}</LayoutGroup>
      <TooltipOverlay />
    </GlobalTooltipContext.Provider>
  )
}

type TooltipArrowProps = {
  side: Side
}

function TooltipArrow({ side }: TooltipArrowProps) {
  return (
    <div
      className={cn(
        'bg-foreground absolute z-50 size-2.5 rotate-45 rounded-[2px]',
        (side === 'top' || side === 'bottom') && 'left-1/2 -translate-x-1/2',
        (side === 'left' || side === 'right') && 'top-1/2 -translate-y-1/2',
        side === 'top' && '-bottom-[3px]',
        side === 'bottom' && '-top-[3px]',
        side === 'left' && '-right-[3px]',
        side === 'right' && '-left-[3px]'
      )}
    />
  )
}

type TooltipPortalProps = {
  children: React.ReactNode
}

function TooltipPortal({ children }: TooltipPortalProps) {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => setIsMounted(true), [])

  return isMounted ? createPortal(children, document.body) : null
}

function TooltipOverlay() {
  const { currentTooltip, transition, globalId } = useGlobalTooltip()

  const position = React.useMemo(() => {
    if (!currentTooltip) return null

    return getTooltipPosition({
      rect: currentTooltip.rect,
      side: currentTooltip.side,
      sideOffset: currentTooltip.sideOffset,
      align: currentTooltip.align,
      alignOffset: currentTooltip.alignOffset
    })
  }, [currentTooltip])

  return (
    <AnimatePresence>
      {currentTooltip && currentTooltip.content && position && (
        <TooltipPortal>
          <motion.div
            data-slot='tooltip-overlay-container'
            className='fixed z-50'
            style={{
              top: position.y,
              left: position.x,
              transform: position.transform
            }}
          >
            <motion.div
              data-slot='tooltip-overlay'
              layoutId={`tooltip-overlay-${globalId}`}
              initial={{ opacity: 0, scale: 0, ...position.initial }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, ...position.initial }}
              transition={transition}
              className='bg-foreground fill-foreground text-background relative w-fit rounded-md px-3 py-1.5 text-xs text-balance'
            >
              {currentTooltip.content}

              {currentTooltip.arrow && <TooltipArrow side={currentTooltip.side} />}
            </motion.div>
          </motion.div>
        </TooltipPortal>
      )}
    </AnimatePresence>
  )
}

type TooltipContextType = {
  content: React.ReactNode
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>
  arrow: boolean
  setArrow: React.Dispatch<React.SetStateAction<boolean>>
  side: Side
  sideOffset: number
  align: Align
  alignOffset: number
  id: string
}

const TooltipContext = React.createContext<TooltipContextType | undefined>(undefined)

const useTooltip = () => {
  const context = React.useContext(TooltipContext)

  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider')
  }

  return context
}

type TooltipProps = {
  children: React.ReactNode
  side?: Side
  sideOffset?: number
  align?: Align
  alignOffset?: number
}

function Tooltip({ children, side = 'top', sideOffset = 10, align = 'center', alignOffset = 0 }: TooltipProps) {
  const id = React.useId()
  const [content, setContent] = React.useState<React.ReactNode>(null)
  const [arrow, setArrow] = React.useState(true)

  return (
    <TooltipContext.Provider
      value={{
        content,
        setContent,
        arrow,
        setArrow,
        side,
        sideOffset,
        align,
        alignOffset,
        id
      }}
    >
      {children}
    </TooltipContext.Provider>
  )
}

type TooltipContentProps = {
  children: React.ReactNode
  arrow?: boolean
}

function TooltipContent({ children, arrow = true }: TooltipContentProps) {
  const { setContent, setArrow } = useTooltip()

  React.useEffect(() => {
    setContent(children)
    setArrow(arrow)
  }, [children, setContent, setArrow, arrow])

  return null
}

type TooltipTriggerProps = {
  children: React.ReactElement
}

function TooltipTrigger({ children }: TooltipTriggerProps) {
  const { content, side, sideOffset, align, alignOffset, id, arrow } = useTooltip()
  const { showTooltip, hideTooltip, currentTooltip } = useGlobalTooltip()
  const triggerRef = React.useRef<HTMLElement>(null)

  const handleOpen = React.useCallback(() => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()

    showTooltip({
      content,
      rect,
      side,
      sideOffset,
      align,
      alignOffset,
      id,
      arrow
    })
  }, [showTooltip, content, side, sideOffset, align, alignOffset, id, arrow])

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      ;(children.props as React.HTMLAttributes<HTMLElement>)?.onMouseEnter?.(e)
      handleOpen()
    },
    [handleOpen, children.props]
  )

  const handleMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      ;(children.props as React.HTMLAttributes<HTMLElement>)?.onMouseLeave?.(e)
      hideTooltip()
    },
    [hideTooltip, children.props]
  )

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      ;(children.props as React.HTMLAttributes<HTMLElement>)?.onFocus?.(e)
      handleOpen()
    },
    [handleOpen, children.props]
  )

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLElement>) => {
      ;(children.props as React.HTMLAttributes<HTMLElement>)?.onBlur?.(e)
      hideTooltip()
    },
    [hideTooltip, children.props]
  )

  React.useEffect(() => {
    if (currentTooltip?.id !== id) return
    if (!triggerRef.current) return

    if (currentTooltip.content === content && currentTooltip.arrow === arrow) return

    const rect = triggerRef.current.getBoundingClientRect()

    showTooltip({
      content,
      rect,
      side,
      sideOffset,
      align,
      alignOffset,
      id,
      arrow
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, arrow, currentTooltip?.id])

  return React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    'data-state': currentTooltip?.id === id ? 'open' : 'closed',
    'data-side': side,
    'data-align': align,
    'data-slot': 'tooltip-trigger'
  } as React.HTMLAttributes<HTMLElement>)
}

export {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useGlobalTooltip,
  useTooltip,
  type TooltipProviderProps,
  type TooltipProps,
  type TooltipContentProps,
  type TooltipTriggerProps
}
