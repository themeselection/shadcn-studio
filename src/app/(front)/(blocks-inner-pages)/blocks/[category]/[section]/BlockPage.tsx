'use client'

// React Imports
import type { MouseEvent } from 'react'

// Third-party Imports
import { CheckIcon, TerminalIcon } from 'lucide-react'

// Type Imports
import type { BlockType, SectionType } from '@/types/blocks'

// Component Imports
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

// Hook Imports
import { useCopy } from '@/hooks/useCopy'

type Props = {
  sectionBlockData: SectionType
  sectionBlocksData: BlockType[]
  index: number
  section: string
}

const BlockPage = ({ index, sectionBlockData, sectionBlocksData, section }: Props) => {
  // Hooks
  const { copied, copy } = useCopy(1000)

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>, blockSlug: string) => {
    e.preventDefault()

    copy(`npx shadcn@latest add ${process.env.NEXT_PUBLIC_APP_URL}/r/${blockSlug}.json`)
  }

  return (
    <Card className='gap-0 overflow-hidden p-0 shadow-none'>
      <CardContent className='bg-muted flex h-[208px] items-center justify-center border-b p-6'>
        {/* Light mode image */}
        <img
          src={`${sectionBlockData.imgSrc.substring(0, sectionBlockData.imgSrc.lastIndexOf('/'))}/${section}/${sectionBlocksData[index].slug}.png?height=159&format=auto`}
          alt={`${sectionBlockData.imgAlt.replace('Blocks', 'Block')} ${index + 1}`}
          className='max-h-full dark:hidden'
        />
        {/* Dark mode image */}
        <img
          src={`${sectionBlockData.imgSrc.substring(0, sectionBlockData.imgSrc.lastIndexOf('/'))}/${section}/${sectionBlocksData[index].slug}-dark.png?height=159&format=auto`}
          alt={`${sectionBlockData.imgAlt.replace('Blocks', 'Block')} ${index + 1}`}
          className='hidden max-h-full dark:inline-block'
        />
      </CardContent>

      <CardContent className='flex items-center justify-between gap-4 py-3.5'>
        <div className='flex flex-col gap-1.5'>
          <CardTitle className='flex items-center gap-2 text-lg'>
            {sectionBlocksData[index].title}
            {sectionBlocksData[index].isNew && <Badge className='bg-primary/10 text-primary rounded-full'>New</Badge>}
          </CardTitle>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='size-7 rounded-sm'
              onClick={e => handleButtonClick(e, sectionBlocksData[index].slug)}
              disabled={copied}
            >
              {copied ? <CheckIcon className='text-green-500' /> : <TerminalIcon />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copied ? 'Copied!' : 'Copy CLI'}</TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  )
}

export default BlockPage
