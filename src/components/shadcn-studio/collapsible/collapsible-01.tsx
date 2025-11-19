import { ChevronsUpDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const CollapsibleDemo = () => {
  return (
    <Collapsible className='flex w-full max-w-[350px] flex-col gap-2'>
      <div className='flex items-center justify-between gap-4 px-4'>
        <div className='text-sm font-semibold'>@peduarte starred 3 repositories</div>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='icon-sm'>
            <ChevronsUpDownIcon />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className='rounded-md border px-4 py-2 font-mono text-sm'>@radix-ui/primitives</div>
      <CollapsibleContent className='flex flex-col gap-2'>
        <div className='rounded-md border px-4 py-2 font-mono text-sm'>@radix-ui/colors</div>
        <div className='rounded-md border px-4 py-2 font-mono text-sm'>@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleDemo
