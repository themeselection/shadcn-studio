'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import { Check, Plus, Send } from 'lucide-react'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/registry/new-york/ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/registry/new-york/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/registry/new-york/ui/dialog'
import { Input } from '@/registry/new-york/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york/ui/tooltip'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

const users = [
  {
    name: 'Olivia Martin',
    email: 'm@example.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png'
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png'
  },
  {
    name: 'Emma Wilson',
    email: 'emma@example.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png'
  },
  {
    name: 'Jackson Lee',
    email: 'lee@example.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png'
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png'
  }
] as const

type User = (typeof users)[number]

export function CardsChat() {
  // States
  const [open, setOpen] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])

  const [messages, setMessages] = useState([
    {
      role: 'agent',
      content: 'Hi, how can I help you today?'
    },
    {
      role: 'user',
      content: "Hey, I'm having trouble with my account."
    },
    {
      role: 'agent',
      content: 'What seems to be the problem?'
    },
    {
      role: 'user',
      content: "I can't log in."
    }
  ])

  const [input, setInput] = useState('')
  const inputLength = input.trim().length

  return (
    <>
      <Card>
        <CardHeader className='flex flex-row items-center'>
          <div className='flex items-center space-x-4'>
            <Avatar>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png' alt='Image' />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm leading-none font-medium'>Sofia Davis</p>
              <p className='text-muted-foreground text-sm'>m@example.com</p>
            </div>
          </div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size='icon' variant='outline' className='ml-auto rounded-full' onClick={() => setOpen(true)}>
                  <Plus />
                  <span className='sr-only'>New message</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>New message</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
                  message.role === 'user' ? 'bg-primary text-primary-foreground ml-auto' : 'bg-muted'
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={event => {
              event.preventDefault()
              if (inputLength === 0) return
              setMessages([
                ...messages,
                {
                  role: 'user',
                  content: input
                }
              ])
              setInput('')
            }}
            className='flex w-full items-center space-x-2'
          >
            <Input
              id='message'
              placeholder='Type your message...'
              className='flex-1'
              autoComplete='off'
              value={input}
              onChange={event => setInput(event.target.value)}
            />
            <Button type='submit' size='icon' disabled={inputLength === 0}>
              <Send />
              <span className='sr-only'>Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='gap-0 p-0 outline-none'>
          <DialogHeader className='px-4 pt-5 pb-4'>
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>Invite a user to this thread. This will create a new group message.</DialogDescription>
          </DialogHeader>
          <Command className='overflow-hidden rounded-t-none border-t bg-transparent'>
            <CommandInput placeholder='Search user...' />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup className='p-2'>
                {users.map(user => (
                  <CommandItem
                    key={user.email}
                    className='flex items-center px-2'
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser !== user))
                      }

                      return setSelectedUsers([...users].filter(u => [...selectedUsers, user].includes(u)))
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={user.avatar} alt='Image' />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className='ml-2'>
                      <p className='text-sm leading-none font-medium'>{user.name}</p>
                      <p className='text-muted-foreground text-sm'>{user.email}</p>
                    </div>
                    {selectedUsers.includes(user) ? <Check className='text-primary ml-auto flex h-5 w-5' /> : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className='flex items-center border-t p-4 sm:justify-between'>
            {selectedUsers.length > 0 ? (
              <div className='flex -space-x-2 overflow-hidden'>
                {selectedUsers.map(user => (
                  <Avatar key={user.email} className='border-background inline-block border-2'>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className='text-muted-foreground text-sm'>Select users to add to this thread.</p>
            )}
            <Button
              disabled={selectedUsers.length < 2}
              onClick={() => {
                setOpen(false)
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
