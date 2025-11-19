'use client'

import { useId, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Nextjs' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'VueJS' },
  { value: 'django', label: 'Django' },
  { value: 'astro', label: 'Astro' },
  { value: 'remix', label: 'Remix' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solidjs', label: 'SolidJS' },
  { value: 'qwik', label: 'Qwik' }
]

const ComboboxMultipleCountBadgeDemo = () => {
  const id = useId()
  const [open, setOpen] = useState(false)

  const [selectedValues, setSelectedValues] = useState<string[]>([
    'react',
    'nextjs',
    'angular',
    'vue',
    'django',
    'astro'
  ])

  const toggleSelection = (value: string) => {
    setSelectedValues(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]))
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Multiple Count badge</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='h-auto min-h-8 w-full justify-between hover:bg-transparent'
          >
            {selectedValues.length > 0 ? (
              <span>
                <Badge variant='outline' className='rounded-sm'>
                  {selectedValues.length}
                </Badge>{' '}
                frameworks selected
              </span>
            ) : (
              <span className='text-muted-foreground'>Select framework</span>
            )}
            <ChevronsUpDownIcon className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-(--radix-popper-anchor-width) p-0'>
          <Command>
            <CommandInput placeholder='Search framework...' />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map(framework => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => toggleSelection(framework.value)}
                  >
                    <span className='truncate'>{framework.label}</span>
                    {selectedValues.includes(framework.value) && <CheckIcon size={16} className='ml-auto' />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ComboboxMultipleCountBadgeDemo
