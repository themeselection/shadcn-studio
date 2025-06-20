'use client'

import { Fragment, useId, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { cn } from '@/lib/utils'

const items = [
  {
    category: 'Fruits',
    items: [{ value: 'Apples' }, { value: 'Bananas' }, { value: 'Cherries' }]
  },
  {
    category: 'Vegetables',
    items: [{ value: 'Carrots' }, { value: 'Broccoli', disabled: true }, { value: 'Spinach' }]
  },
  {
    category: 'Beverages',
    items: [{ value: 'Tea' }, { value: 'Coffee', disabled: true }, { value: 'Juice' }]
  }
]

const ComboboxOptionDisabledDemo = () => {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Combobox disabled option </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]'
          >
            {value ? (
              <span className='flex min-w-0 items-center gap-2'>
                <span className='truncate'>{value}</span>
              </span>
            ) : (
              <span className='text-muted-foreground'>Select item</span>
            )}
            <ChevronsUpDownIcon size={16} className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0' align='start'>
          <Command>
            <CommandInput placeholder='Search item...' />
            <CommandList>
              <CommandEmpty>No item found.</CommandEmpty>
              {items.map(group => (
                <Fragment key={group.category}>
                  <CommandGroup heading={group.category}>
                    {group.items.map(item => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onSelect={currentValue => {
                          setValue(currentValue)
                          setOpen(false)
                        }}
                        className={cn(item.disabled && 'cursor-not-allowed opacity-50')}
                        disabled={item.disabled}
                      >
                        {item.value}
                        {value === item.value && <CheckIcon size={16} className='ml-auto' />}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Fragment>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ComboboxOptionDisabledDemo
