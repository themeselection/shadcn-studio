'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { JSX } from 'react'

// Third-party Imports
import { Code } from 'lucide-react'
import type { RegistryItem } from 'shadcn/registry'

// Component Imports
import Link from 'next/link'

import { Button } from '@/registry/new-york/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/registry/new-york/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'
import OpenInV0 from '@/components/OpenInV0'
import CopyButton from '@/components/CopyButton'
import ComponentCli from '@/components/ComponentCli'
import CodeBlock, { highlight } from '@/components/CodeBlock'

// Util Imports
import { convertRegistryPaths } from '@/utils/components'

const ComponentsDetails = ({ component }: { component: RegistryItem }) => {
  // States
  const [code, setCode] = useState<string | null>(null)
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode('')
      setHighlightedCode(null)
    }

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/components/${component.name}.json`)

        if (!response.ok) {
          handleEmptyCode()

          return
        }

        const contentType = response.headers.get('content-type')

        if (!contentType || !contentType.includes('application/json')) {
          handleEmptyCode()

          return
        }

        const data = await response.json()
        const codeContent = convertRegistryPaths(data.files[0].content) || ''

        setCode(codeContent)

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, 'tsx')

        setHighlightedCode(highlighted)
      } catch (error) {
        console.error('Failed to load code:', error)
        handleEmptyCode()
      }
    }

    loadCode()
  }, [component.name])

  return (
    <div className='absolute end-2 top-2 flex items-center gap-2'>
      <OpenInV0
        sourceUrl={`${process.env.NEXT_PUBLIC_APP_URL}/r/components/${component.name}.json`}
        title={component.name}
      />
      <Dialog>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-foreground cursor-pointer opacity-0 transition-none group-focus-within/item:opacity-100 group-hover/item:opacity-100 hover:!bg-transparent disabled:opacity-100'
                >
                  <Code aria-hidden={true} className='size-4' />
                  <span className='sr-only'>View code</span>
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>View code</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className='sm:max-w-[650px]'>
          <DialogHeader>
            <DialogTitle className='text-left'>Installation</DialogTitle>
            <DialogDescription className='sr-only'>Use the CLI to add components to your project</DialogDescription>
          </DialogHeader>
          <div className='min-w-0 space-y-5'>
            <ComponentCli name={`components/${component.name}`} toast='Installation command' />
            <div className='space-y-4'>
              <h2 className='text-left text-lg leading-none font-semibold'>Code</h2>
              <div className='relative'>
                {code === '' ? (
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
                ) : (
                  <>
                    <CodeBlock code={code} lang='tsx' preHighlighted={highlightedCode} />
                    <CopyButton source={code} className='dark end-1 top-1' toast='Code' />
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ComponentsDetails
