// Third-party Imports
import { SparklesIcon } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// Util Imports
import { cn } from '@/lib/utils'

const CopyPrompt = ({ className }: { className?: string }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Button
              variant='ghost'
              size='icon'
              className={cn(
                'text-muted-foreground hover:text-foreground cursor-pointer opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent disabled:opacity-0 disabled:group-hover/item:opacity-50',
                className
              )}
              aria-label='Copy prompt'
              disabled
            >
              <SparklesIcon />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>Copy prompt (Coming Soon)</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CopyPrompt
