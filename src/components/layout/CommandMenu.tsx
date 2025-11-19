'use client'

// React Imports
import { Fragment, useCallback, useEffect, useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// Third-party Imports
import { useMedia } from 'react-use'
import { Component, Palette, Search, Sparkles } from 'lucide-react'

// Component Imports
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// Data Imports
import { searchData } from '@/assets/data/search'

const CommandMenu = () => {
  // States
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  // Hooks
  const isBreakpointReached = useMedia('(max-width: 1279px)', false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant='outline'
        className='xl:text-muted-foreground relative w-9 cursor-pointer text-sm font-normal xl:w-52 xl:justify-start xl:!pe-12 xl:shadow-none'
        onClick={() => setOpen(true)}
        {...(isBreakpointReached && { size: 'icon' })}
      >
        <Search className='size-4' />
        <span className='inline-flex max-xl:hidden'>Search...</span>
        <span className='sr-only'>Search</span>
        <kbd className='bg-muted pointer-events-none absolute top-[.4375rem] right-1.5 flex h-5 items-center gap-1 rounded border px-1.5 text-xs font-medium select-none max-xl:hidden'>
          <span className='text-sm'>⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader className='sr-only'>
          <DialogTitle>Search...</DialogTitle>
          <DialogDescription>Search for docs, blocks, components, and more.</DialogDescription>
        </DialogHeader>
        <DialogContent className='overflow-hidden p-0'>
          <Command
            className='[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'
            filter={(value, search, keywords) => {
              search = search.toLowerCase()
              value = value.toLowerCase()

              // Exact match with item name (highest priority)
              if (value === search) return 2

              // Partial match with item name (medium priority)
              if (value.includes(search)) return 1.5

              // Match in tags/keywords (lowest priority)
              if (keywords && keywords.length > 0) {
                // Check for exact tag match first
                if (keywords.some(keyword => keyword.toLowerCase() === search)) return 1.25

                // Then check for partial matches in tags
                const extendedValue = value + ' ' + keywords.join(' ').toLowerCase()

                if (extendedValue.includes(search)) return 1
              }

              return 0
            }}
          >
            <CommandInput placeholder='Type a command or search...' value={search} onValueChange={setSearch} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {search ? (
                searchData.map((searchGroup, index) => (
                  <Fragment key={index}>
                    <CommandGroup heading={searchGroup.title}>
                      {searchGroup.data.map((item, i) => (
                        <CommandItem
                          key={i}
                          keywords={item.tags}
                          onSelect={() =>
                            runCommand(() => {
                              if (item.openInNewTab) {
                                window.open(item.href, '_blank', 'noopener,noreferrer')
                              } else {
                                router.push(item.href)
                              }
                            })
                          }
                        >
                          <item.icon />
                          <span>{item.name}</span>
                          {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    {index !== searchData.length - 1 && <CommandSeparator />}
                  </Fragment>
                ))
              ) : (
                <CommandGroup heading='Suggestions'>
                  <CommandItem onSelect={() => runCommand(() => router.push('/theme-generator'))}>
                    <Palette />
                    <span>Theme Generator</span>
                  </CommandItem>
                  <CommandItem onSelect={() => runCommand(() => router.push('/components'))}>
                    <Component />
                    <span>Components</span>
                  </CommandItem>
                  <CommandItem onSelect={() => runCommand(() => router.push('/docs/getting-started/introduction'))}>
                    <Sparkles />
                    <span>Introduction</span>
                  </CommandItem>
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CommandMenu
