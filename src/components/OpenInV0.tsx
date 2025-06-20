// Third-party Imports
import type { VariantProps } from 'class-variance-authority'

// Component Imports
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { buttonVariants } from '@/components/ui/button'

// Util Imports
import { cn } from '@/lib/utils'

// SVG Imports
import V0 from '@/assets/svg/V0'

type Props = {
  className?: string
  buttonVariant?: VariantProps<typeof buttonVariants>['variant']
}

const OpenInV0 = ({ className, buttonVariant = 'ghost' }: Props) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Button
              variant={buttonVariant}
              size='icon'
              className={cn(
                {
                  'text-muted-foreground hover:text-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent disabled:opacity-0 disabled:group-hover/item:opacity-50':
                    buttonVariant === 'ghost'
                },
                className
              )}
              aria-label='Open in v0'
              disabled
            >
              <V0 />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>Open in v0 (Coming Soon)</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default OpenInV0
