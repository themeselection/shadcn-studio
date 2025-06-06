import { UserPlusIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Button } from '@/registry/new-york/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/new-york/ui/dialog'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'

const friends = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'CP',
    name: 'Cristofer Press',
    mail: 'cristoferpress@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'Ck',
    name: 'Carla Korsgaard',
    mail: 'carlakorsgaard@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HB',
    name: 'Hanna Baptista',
    mail: 'hannabaptista@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'ZD',
    name: 'Zord Dorwart',
    mail: 'zorddorwart@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'CB',
    name: 'Corey Bergson',
    mail: 'coreybergson@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'JL',
    name: 'James Lubin',
    mail: 'jameslubin@gmail.com'
  }
]

const DialogInviteFriendsDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Invite</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader className='text-center'>
          <DialogTitle className='text-xl'>Invite new members </DialogTitle>
        </DialogHeader>
        <form className='flex gap-4 max-sm:flex-col'>
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='email' placeholder='example@gmail.com' required />
          </div>
          <Button type='submit' className='sm:self-end'>
            Send Invite
          </Button>
        </form>
        <p className='mt-2'>Invite Friends</p>
        <ul className='space-y-4'>
          {friends.map((item, index) => (
            <li key={index} className='flex items-center justify-between gap-3'>
              <div className='flex items-center gap-3 max-[420px]:w-50'>
                <Avatar className='size-10'>
                  <AvatarImage src={item.src} alt={item.name} />
                  <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                </Avatar>
                <div className='flex flex-1 flex-col overflow-hidden'>
                  <span>{item.name}</span>
                  <span className='text-muted-foreground truncate text-sm'>{item.mail}</span>
                </div>
              </div>
              <Button
                size='sm'
                className='bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400'
              >
                <UserPlusIcon />
                Invite
              </Button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export default DialogInviteFriendsDemo
