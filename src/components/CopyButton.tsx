'use client'

// Third-party Imports
import { Check, Copy } from 'lucide-react'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'

// Hook Imports
import { useCopy } from '@/hooks/useCopy'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

const CopyButton = ({ source, className, toast }: { source: string | null; className?: string; toast?: string }) => {
  // Hooks
  const { copied, copy } = useCopy(1500, toast)

  return (
    <div className={cn('absolute end-2 top-2', className)}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='text-muted-foreground hover:text-foreground cursor-pointer transition-none hover:!bg-transparent disabled:opacity-100'
              onClick={() => copy(source || '')}
              aria-label={copied ? 'Copied' : 'Copy component source'}
              disabled={copied}
            >
              <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
                <Check aria-hidden={true} className='size-4 text-green-500' />
              </div>
              <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
                <Copy aria-hidden={true} className='size-4' />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copy</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default CopyButton
