'use client'

import { useId, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const users = [
  {
    name: 'Phillip George',
    email: 'phillip12@gmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    status: 'online'
  },
  {
    name: 'Jaylon Donin',
    email: 'jaylo-don@yahoo.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    status: 'offline'
  },
  {
    name: 'Tiana Curtis',
    email: 'tiana_curtis@gmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    status: 'away'
  },
  {
    name: 'Zaire Vetrovs',
    email: 'zaire.vetrovs@outlook.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    status: 'online'
  },
  {
    name: 'Kianna Philips',
    email: 'kiannaphilips@gmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    status: 'busy'
  },
  {
    name: 'John Doe',
    email: 'john2doe@icloud.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    status: 'online'
  },
  {
    name: 'Rock Lee',
    email: 'rocklee@protonmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    status: 'busy'
  },
  {
    name: 'Henry Potter',
    email: 'henry3potter@gmail.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    status: 'online'
  }
]

const ComboboxUserDemo = () => {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const selectedUser = users.find(user => user.name === value)

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>User combobox</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button id={id} variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
            {selectedUser ? (
              <span className='flex gap-2'>
                <Avatar className='size-6'>
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                </Avatar>
                <span className='font-medium'>{selectedUser.name}</span>
              </span>
            ) : (
              <span className='text-muted-foreground'>Select user</span>
            )}
            <ChevronsUpDownIcon className='text-muted-foreground/80 shrink-0' aria-hidden='true' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[300px] p-0'>
          <Command>
            <CommandInput placeholder='Search user...' />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {users.map(user => (
                  <CommandItem
                    key={user.name}
                    value={user.name}
                    onSelect={currentValue => {
                      setValue(currentValue === value ? '' : currentValue)
                      setOpen(false)
                    }}
                  >
                    <span className='flex items-center gap-2'>
                      <Avatar className='size-7'>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className='flex flex-col'>
                        <span className='font-medium'>{user.name}</span>
                        <span className='text-muted-foreground text-sm'>{user.email}</span>
                      </span>
                    </span>
                    {value === user.name && <CheckIcon size={16} className='ml-auto' />}
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

export default ComboboxUserDemo
