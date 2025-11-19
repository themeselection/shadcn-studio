// Next Imports
import Link from 'next/link'

// Third-party Imports
import { Code } from 'lucide-react'
import type { BundledLanguage } from 'shiki/bundle/web'

// Type Imports
import type { ProcessedComponentsData } from '@/types/components'

// Component Imports
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import ComponentCli from '@/components/ComponentCli'
import CopyButton from '@/components/CopyButton'
import CodeBlock from '@/components/CodeBlock'
import CodeBlockMultipleView from './CodeBlockMultipleView'

const ComponentDetails = ({ componentsData }: { componentsData: ProcessedComponentsData }) => {
  const { component, tree } = componentsData

  return (
    <div className='absolute end-2 top-2 flex items-center gap-2'>
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='text-muted-foreground hover:text-foreground cursor-pointer opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent disabled:opacity-100'
              >
                <Code />
                <span className='sr-only'>View code</span>
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>View code</TooltipContent>
        </Tooltip>
        <DialogContent className='sm:max-w-[900px]'>
          <DialogHeader>
            <DialogTitle className='text-left'>CLI Command</DialogTitle>
            <DialogDescription className='sr-only'>Use the CLI to add components to your project</DialogDescription>
          </DialogHeader>
          <div className='min-w-0 space-y-5'>
            <ComponentCli name={component.name} toast='Installation command' />
            <div className='space-y-4'>
              <h2 className='text-left text-lg leading-none font-semibold'>Manual Code</h2>
              <div className='overflow-hidden rounded-md border'>
                {component.files && component.files.length > 0 ? (
                  component.files.length === 1 ? (
                    <div className='relative'>
                      <CodeBlock
                        code={component.files[0].content || ''}
                        lang={(component.files[0]?.path?.split('.').pop() || 'tsx') as BundledLanguage}
                      />
                      <CopyButton source={component.files[0].content || ''} className='end-1 top-1' toast='Code' />
                    </div>
                  ) : (
                    <CodeBlockMultipleView files={component.files} tree={tree} />
                  )
                ) : (
                  <p className='text-muted-foreground text-sm'>
                    No code available. If you think this is an error, please{' '}
                    <Link
                      href='https://github.com/themeselection/shadcn-studio/issues'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-foreground font-medium underline hover:no-underline'
                    >
                      open an issue
                    </Link>
                    .
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ComponentDetails
