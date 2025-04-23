// Third-party Imports
import { ChevronDown } from 'lucide-react'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york/ui/popover'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york/ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/registry/new-york/ui/command'

export function CardsTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Invite your team members to collaborate.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        <div className='flex items-center justify-between space-x-4'>
          <div className='flex items-center space-x-4'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png' alt='Image' />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm leading-none font-medium'>Sofia Davis</p>
              <p className='text-muted-foreground text-sm'>m@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='sm' className='ml-auto'>
                Owner <ChevronDown className='text-muted-foreground' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0' align='end'>
              <Command>
                <CommandInput placeholder='Select new role...' />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Viewer</p>
                      <p className='text-muted-foreground text-sm'>Can view and comment.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Developer</p>
                      <p className='text-muted-foreground text-sm'>Can view, comment and edit.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Billing</p>
                      <p className='text-muted-foreground text-sm'>Can view, comment and manage billing.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Owner</p>
                      <p className='text-muted-foreground text-sm'>Admin-level access to all resources.</p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className='flex items-center justify-between space-x-4'>
          <div className='flex items-center space-x-4'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png' alt='Image' />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm leading-none font-medium'>Jackson Lee</p>
              <p className='text-muted-foreground text-sm'>p@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='sm' className='ml-auto'>
                Member <ChevronDown className='text-muted-foreground' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0' align='end'>
              <Command>
                <CommandInput placeholder='Select new role...' />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup className='p-1.5'>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Viewer</p>
                      <p className='text-muted-foreground text-sm'>Can view and comment.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Developer</p>
                      <p className='text-muted-foreground text-sm'>Can view, comment and edit.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Billing</p>
                      <p className='text-muted-foreground text-sm'>Can view, comment and manage billing.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Owner</p>
                      <p className='text-muted-foreground text-sm'>Admin-level access to all resources.</p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className='flex items-center justify-between space-x-4'>
          <div className='flex items-center space-x-4'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png' alt='Image' />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm leading-none font-medium'>Isabella Nguyen</p>
              <p className='text-muted-foreground text-sm'>i@example.com</p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='sm' className='ml-auto'>
                Member <ChevronDown className='text-muted-foreground' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0' align='end'>
              <Command>
                <CommandInput placeholder='Select new role...' />
                <CommandList>
                  <CommandEmpty>No roles found.</CommandEmpty>
                  <CommandGroup className='p-1.5'>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Viewer</p>
                      <p className='text-muted-foreground text-sm'>Can view and comment.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Developer</p>
                      <p className='text-muted-foreground text-sm'>Can view, comment and edit.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Billing</p>
                      <p className='text-muted-foreground text-sm'>Can view, comment and manage billing.</p>
                    </CommandItem>
                    <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                      <p>Owner</p>
                      <p className='text-muted-foreground text-sm'>Admin-level access to all resources.</p>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  )
}
