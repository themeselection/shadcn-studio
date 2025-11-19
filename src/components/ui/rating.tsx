'use client'

import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { StarIcon, type LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

// Variants
const ratingVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'text-foreground fill-current',
      destructive: 'text-destructive fill-current',
      outline: 'text-muted-foreground fill-transparent stroke-current',
      secondary: 'text-secondary-foreground fill-current',
      yellow: 'fill-current text-amber-600 dark:text-amber-400'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

// Constants
const RATING_DEFAULTS = {
  precision: 1,
  maxStars: 5,
  size: 20,
  variant: 'default' as const,
  icon: <StarIcon />
} as const

// Types
interface RatingItemProps extends React.ComponentProps<'label'> {
  variant?: VariantProps<typeof ratingVariants>['variant']
  size: number
  value: number
  hoveredValue: number | null
  point: number
  name: string
  readOnly?: boolean
  disabled?: boolean
  precision: number
  Icon: React.ReactElement<LucideProps>
  onMouseLeave: React.MouseEventHandler<HTMLLabelElement>
  onValueHover: (value: number) => void
  onValueChange?: (value: number) => void
}

interface RatingProps extends React.ComponentProps<'div'> {
  value?: number
  defaultValue?: number
  name?: string
  max?: number
  size?: number
  icon?: React.ReactElement<LucideProps>
  variant?: VariantProps<typeof ratingVariants>['variant']
  readOnly?: boolean
  disabled?: boolean
  precision?: number
  onValueChange?: (value: number) => void
  onValueHover?: (value: number) => void
}

// Rating Item Component
function RatingItem({
  size,
  variant = 'default',
  value,
  point,
  hoveredValue,
  name,
  readOnly = false,
  disabled = false,
  precision,
  Icon,
  onMouseLeave,
  onValueChange,
  onValueHover,
  className,
  ...props
}: RatingItemProps) {
  const Comp = readOnly ? 'span' : 'label'
  const id = React.useId()
  const ratingIconId = `rating-icon-${id}`
  const isInteractive = !readOnly && !disabled
  const partialPoint = point % 1
  const isPartialPoint = partialPoint !== 0
  const shouldShowFilled = (hoveredValue || value) >= point
  const partialPointWidth = isPartialPoint && shouldShowFilled ? `${partialPoint * 100}%` : undefined

  const icons = React.useMemo(() => {
    const emptyIcon = React.cloneElement(Icon, {
      size,
      className: cn(
        'fill-muted-foreground/20 stroke-muted-foreground/10',
        variant === 'yellow' && 'fill-amber-600/30 stroke-amber-600/10 dark:fill-amber-400/30 dark:stroke-amber-400/10'
      ),
      'aria-hidden': 'true'
    })

    const fullIcon = React.cloneElement(Icon, {
      size,
      className: cn(ratingVariants({ variant })),
      'aria-hidden': 'true'
    })

    return { emptyIcon, fullIcon }
  }, [Icon, size, variant])

  const getRatingPoint = React.useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      const { left, width } = event.currentTarget.getBoundingClientRect()

      if (width === 0 || precision <= 0 || precision > 1) return 0
      const x = event.clientX - left
      const fillRatio = x / width
      const base = Math.ceil(point) - 1

      return base + Math.ceil(fillRatio / precision) * precision
    },
    [precision, point]
  )

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      if (!isInteractive) return
      onValueHover(getRatingPoint(event))
    },
    [isInteractive, onValueHover, getRatingPoint]
  )

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      if (!isInteractive) return
      const newPoint = getRatingPoint(event)

      onValueHover(0)
      onValueChange?.(newPoint === value ? 0 : newPoint)

      // Prevent focus on click by blurring the element
      event.currentTarget.blur()
    },
    [isInteractive, value, onValueChange, onValueHover, getRatingPoint]
  )

  return (
    <>
      <Comp
        data-slot='rating-item'
        htmlFor={readOnly ? undefined : `${ratingIconId}-${point}`}
        aria-label={`${point} Stars`}
        onClick={!readOnly ? handleClick : undefined}
        onMouseMove={!readOnly ? handleMouseMove : undefined}
        onMouseLeave={!readOnly ? onMouseLeave : undefined}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-filled={shouldShowFilled}
        className={cn(
          '[&_svg]:pointer-events-none',
          isPartialPoint && 'pointer-events-none absolute top-0 left-0 overflow-hidden',
          isInteractive && 'cursor-pointer hover:scale-105',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        style={{ width: partialPointWidth }}
        {...props}
      >
        {!isPartialPoint && !shouldShowFilled && icons.emptyIcon}
        {shouldShowFilled && icons.fullIcon}
      </Comp>
      {!readOnly && (
        <input
          type='radio'
          id={`${ratingIconId}-${point}`}
          name={name}
          value={point}
          className='sr-only'
          tabIndex={-1}
          data-slot='rating-input'
        />
      )}
    </>
  )
}

// Rating Component
function Rating({
  value: controlledValue,
  defaultValue = 0,
  name,
  max = RATING_DEFAULTS.maxStars,
  size = RATING_DEFAULTS.size,
  icon: Icon = RATING_DEFAULTS.icon,
  variant = RATING_DEFAULTS.variant,
  className,
  readOnly = false,
  disabled = false,
  precision = RATING_DEFAULTS.precision,
  onValueChange,
  onValueHover,
  ...props
}: RatingProps) {
  const id = React.useId()
  const ratingName = name ?? `rating-${id}`
  const [internalValue, setInternalValue] = React.useState<number>(defaultValue)
  const [hoveredValue, setHoveredValue] = React.useState<number>(0)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue
  const isInteractive = !readOnly && !disabled

  const handleValueChange = React.useCallback(
    (newValue: number) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }

      onValueChange?.(newValue)
    },
    [isControlled, onValueChange]
  )

  const handleValueHover = React.useCallback(
    (point: number) => {
      setHoveredValue(point)
      onValueHover?.(point)
    },
    [onValueHover]
  )

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isInteractive) return

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          event.preventDefault()

          if (value + precision > max) {
            handleValueChange(0)
          } else {
            handleValueChange(value + precision)
          }

          break
        case 'ArrowLeft':
        case 'ArrowDown':
          event.preventDefault()

          if (value - precision < 0) {
            handleValueChange(max)
          } else {
            handleValueChange(value - precision)
          }

          break
        case ' ':
        case 'Enter':
          event.preventDefault()

          // If no rating is set, set to first step, otherwise clear rating
          if (value === 0) {
            handleValueChange(precision)
          } else {
            handleValueChange(0)
          }

          break
        case 'Home':
          event.preventDefault()
          handleValueChange(precision)

          break
        case 'End':
          event.preventDefault()
          handleValueChange(max)

          break
        default:
          break
      }
    },
    [isInteractive, value, max, precision, handleValueChange]
  )

  const handleMouseDown = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent focus on mouse click
    event.preventDefault()
  }, [])

  const stars = React.useMemo(() => {
    if (precision <= 0 || precision > 1) {
      console.warn('Rating: precision must be greater than 0 and less than or equal to 1')

      return []
    }

    return Array.from({ length: max }, (_, index) => ({
      key: index,
      points: Array.from({ length: Math.floor(1 / precision) }, (_, i) => index + precision * (i + 1))
    }))
  }, [max, precision])

  return (
    <div
      data-slot='rating'
      role={!readOnly ? 'radiogroup' : 'img'}
      onKeyDown={!readOnly ? handleKeyDown : undefined}
      onMouseDown={!readOnly ? handleMouseDown : undefined}
      tabIndex={!readOnly && !disabled ? 0 : undefined}
      data-disabled={disabled}
      data-readonly={readOnly}
      className={cn(
        'focus-visible:ring-ring/50 flex gap-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        disabled && 'opacity-50',
        className
      )}
      aria-label={readOnly ? `${value} stars` : 'Rating'}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={`${value} of ${max} stars`}
      {...props}
    >
      {stars.map(({ key, points }) => (
        <span
          key={key}
          data-slot='rating-star'
          className={cn(
            'relative',
            isInteractive && 'transition-transform hover:scale-110',
            disabled && 'cursor-not-allowed'
          )}
          aria-disabled={disabled}
          aria-hidden={readOnly}
        >
          {points.map(point => (
            <RatingItem
              key={point}
              name={ratingName}
              disabled={disabled}
              hoveredValue={hoveredValue}
              point={point}
              precision={precision}
              readOnly={readOnly}
              size={size}
              value={value}
              variant={variant}
              Icon={Icon}
              onMouseLeave={() => setHoveredValue(0)}
              onValueHover={handleValueHover}
              onValueChange={handleValueChange}
            />
          ))}
        </span>
      ))}
    </div>
  )
}

export { Rating, ratingVariants, type RatingProps }
