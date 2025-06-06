import { LogInIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/registry/new-york/ui/dialog'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'

const DialogSignInDemo = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant='outline'>Sign In</Button>
        </DialogTrigger>
        <DialogContent className='to-card bg-gradient-to-b from-sky-100 to-40% [background-size:100%_101%] sm:max-w-sm dark:from-sky-900'>
          <DialogHeader className='items-center'>
            <div className='mb-4 flex size-12 items-center justify-center rounded-full bg-sky-600/10 sm:mx-0 dark:bg-sky-400/10'>
              <LogInIcon className='size-6 text-sky-600 dark:text-sky-400' />
            </div>
            <DialogTitle>Sign in with email</DialogTitle>
            <DialogDescription className='text-center'>
              Make a new doc to bring your words, data and teams together. For free.
            </DialogDescription>
          </DialogHeader>
          <form className='flex flex-col gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' name='useremail' placeholder='example@gmail.com' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' name='userpassword' placeholder='Password' />
            </div>
          </form>
          <DialogFooter className='space-y-2 pt-4 sm:flex-col'>
            <Button className='bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400'>
              Get Started
            </Button>
            <div className='before:bg-border after:bg-border flex items-center gap-4 before:h-px before:flex-1 after:h-px after:flex-1'>
              <span className='text-muted-foreground text-xs'>Or sign in with</span>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Button variant='outline' className='flex-1'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
                  alt='Google Icon'
                  className='size-5'
                />
              </Button>
              <Button variant='outline' className='flex-1'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png?width=20&height=20&format=auto'
                  alt='X Icon'
                  className='size-5 dark:invert'
                />
              </Button>
              <Button variant='outline' className='flex-1'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png?width=20&height=20&format=auto'
                  alt='Facebook Icon'
                  className='size-5'
                />
              </Button>
              <Button variant='outline' className='flex-1'>
                <img
                  src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto'
                  alt='GitHub Icon'
                  className='size-5 dark:invert'
                />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogSignInDemo
