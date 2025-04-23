// Next Imports
import Link from 'next/link'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'

// SVG Imports
import V0 from '@/assets/svg/V0'

const OpenInV0 = ({ sourceUrl, title }: { sourceUrl: string; title?: string }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='text-muted-foreground hover:text-foreground opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent disabled:opacity-100'
            aria-label='Open in v0'
            asChild
          >
            <Link
              href={`https://v0.dev/chat/api/open?url=${encodeURIComponent(sourceUrl)}${title && `&title=shadcn/studio - ${title}`}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <V0 aria-hidden={true} className='size-4' />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Open in v0</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default OpenInV0
