import { useId } from 'react'

import { Button } from '@/registry/new-york/ui/button'
import { Checkbox } from '@/registry/new-york/ui/checkbox'
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

const DialogSignUpDemo = () => {
  const id = useId()

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant='outline'>Sign Up</Button>
        </DialogTrigger>
        <DialogContent className='to-card bg-gradient-to-b from-green-100 to-40% [background-size:100%_101%] sm:max-w-sm dark:from-green-900'>
          <DialogHeader className='items-center'>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>Start your 60-day free trial now.</DialogDescription>
          </DialogHeader>
          <form className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-3'>
                <Label htmlFor='first-name'>First Name</Label>
                <Input id='first-name' name='firstname' placeholder='John' />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='last-name'>Last Name</Label>
                <Input id='last-name' name='lastname' placeholder='Doe' />
              </div>
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' id='email' name='useremail' placeholder='example@gmail.com' />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' name='userpassword' placeholder='Password' />
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id={id}
                className='focus-visible:ring-green-600/20 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 dark:text-white dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:border-green-400 dark:data-[state=checked]:bg-green-400'
                defaultChecked
              />
              <Label htmlFor={id} className='gap-1'>
                I agree with
                <a href='#' className='underline hover:no-underline'>
                  condition
                </a>
                and
                <a href='#' className='underline hover:no-underline'>
                  privacy policy
                </a>
              </Label>
            </div>
          </form>
          <DialogFooter className='pt-4 sm:flex-col'>
            <Button className='bg-green-600 text-white hover:bg-green-600 focus-visible:ring-green-600 dark:bg-green-400 dark:hover:bg-green-400 dark:focus-visible:ring-green-400'>
              Start your trial
            </Button>
            <div className='before:bg-border after:bg-border flex items-center gap-4 before:h-px before:flex-1 after:h-px after:flex-1'>
              <span className='text-muted-foreground text-xs'>Or</span>
            </div>
            <Button variant='outline'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
                alt='Google Icon'
                className='size-5'
              />
              <span className='flex justify-center'>Continue with Google</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogSignUpDemo
