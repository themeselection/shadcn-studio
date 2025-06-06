'use client'

import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'

const options = [
  {
    label: 'Merge pull request',
    description: 'All commits from this branch will be added to the base branch via a commit version.'
  },
  {
    label: 'Squash and merge',
    description: 'The 6 commits from this branch will be combined into one commit in the base branch.'
  },
  {
    label: 'Rebase and merge',
    description: 'The 6 commits from this branch will be rebased and added to the base branch.'
  }
]

const ButtonGroupDropdownDemo = () => {
  const [selectedIndex, setSelectedIndex] = useState('0')

  return (
    <div className='divide-primary-foreground/30 inline-flex w-fit divide-x rounded-md shadow-xs'>
      <Button className='rounded-none rounded-s-md shadow-none focus-visible:z-10'>
        {options[Number(selectedIndex)].label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='icon' className='rounded-none rounded-e-md focus-visible:z-10'>
            <ChevronDownIcon />
            <span className='sr-only'>Select option</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='bottom' sideOffset={4} align='end' className='max-w-64 md:max-w-xs!'>
          <DropdownMenuRadioGroup value={selectedIndex} onValueChange={setSelectedIndex}>
            {options.map((option, index) => (
              <DropdownMenuRadioItem key={option.label} value={String(index)} className='items-start [&>span]:pt-1.5'>
                <div className='flex flex-col gap-1'>
                  <span className='text-sm font-medium'>{option.label}</span>
                  <span className='text-muted-foreground text-xs'>{option.description}</span>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ButtonGroupDropdownDemo
