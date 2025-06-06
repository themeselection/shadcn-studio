// Next Imports
import Link from 'next/link'

// Third-party Imports
import type { VariantProps } from 'class-variance-authority'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'
import type { buttonVariants } from '@/registry/new-york/ui/button'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

// SVG Imports
import V0 from '@/assets/svg/V0'

type Props = {
  sourceUrl: string
  title?: string
  className?: string
  buttonVariant?: VariantProps<typeof buttonVariants>['variant']
}

const OpenInV0 = ({ sourceUrl, title, className, buttonVariant = 'ghost' }: Props) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={buttonVariant}
            size='icon'
            className={cn(
              {
                'text-muted-foreground hover:text-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent disabled:opacity-100':
                  buttonVariant === 'ghost'
              },
              className
            )}
            aria-label='Open in v0'
            asChild
          >
            <Link
              href={`https://v0.dev/chat/api/open?url=${encodeURIComponent(sourceUrl)}${title && `&title=shadcn/studio - ${title}`}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <V0 aria-hidden={true} className='size-4' />
              <span className='sr-only'>Open in v0</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Open in v0</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default OpenInV0
