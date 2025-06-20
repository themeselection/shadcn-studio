'use client'

import { useId, useState } from 'react'

import {
  ChevronsUpDownIcon,
  DollarSignIcon,
  FactoryIcon,
  FilmIcon,
  HospitalIcon,
  HotelIcon,
  MonitorIcon,
  ScaleIcon,
  SchoolIcon,
  TractorIcon,
  ZapIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const industries = [
  {
    value: 'information technology',
    label: 'Information Technology',
    icon: MonitorIcon
  },
  {
    value: 'healthcare',
    label: 'Healthcare',
    icon: HospitalIcon
  },
  {
    value: 'finance',
    label: 'Finance',
    icon: DollarSignIcon
  },
  {
    value: 'education',
    label: 'Education',
    icon: SchoolIcon
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
    icon: FilmIcon
  },
  {
    value: 'manufacturing',
    label: 'Manufacturing',
    icon: FactoryIcon
  },
  {
    value: 'energy',
    label: 'Energy',
    icon: ZapIcon
  },
  {
    value: 'hospitality',
    label: 'Hospitality',
    icon: HotelIcon
  },
  {
    value: 'legal',
    label: 'Legal',
    icon: ScaleIcon
  },
  {
    value: 'agriculture',
    label: 'Agriculture',
    icon: TractorIcon
  }
]

const ComboboxOptionWithIIconDemo = () => {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Combobox option with icon</Label>
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
                {(() => {
                  const selectedItem = industries.find(industry => industry.value === value)

                  if (selectedItem) {
                    const Icon = selectedItem.icon

                    return <Icon className='text-muted-foreground size-4' />
                  }

                  return null
                })()}
                <span className='truncate'>{industries.find(industry => industry.value === value)?.label}</span>
              </span>
            ) : (
              <span className='text-muted-foreground'>Select industry category</span>
            )}
            <ChevronsUpDownIcon size={16} className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0' align='start'>
          <Command>
            <CommandInput placeholder='Search industries...' />
            <CommandList>
              <CommandEmpty>No industry found.</CommandEmpty>
              <CommandGroup>
                {industries.map(industry => (
                  <CommandItem
                    key={industry.value}
                    value={industry.value}
                    onSelect={currentValue => {
                      setValue(currentValue === value ? '' : currentValue)
                      setOpen(false)
                    }}
                    className='flex items-center justify-between'
                  >
                    <div className='flex items-center gap-2'>
                      <industry.icon className='text-muted-foreground size-4' />
                      {industry.label}
                    </div>
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

export default ComboboxOptionWithIIconDemo
