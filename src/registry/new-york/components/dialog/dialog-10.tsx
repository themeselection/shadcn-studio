import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Button } from '@/registry/new-york/ui/button'
import { Checkbox } from '@/registry/new-york/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/registry/new-york/ui/dialog'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  }
]

const DialogReferAndEarnDemo = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant='outline'>Refer & Earn</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-xl'>
          <DialogHeader>
            <DialogTitle className='text-xl'>Refers & Earn AI Credits</DialogTitle>
            <DialogDescription className='text-base'>
              Get 5 AI credits per successful referral sign up. Use AI credits to get AskFred insights, custom meetings
              notes, automated soundbites etc.
            </DialogDescription>
          </DialogHeader>
          <form className='flex flex-col gap-4 pt-4'>
            <div className='grid grow-1 gap-3'>
              <Label htmlFor='email'>Refer by email</Label>
              <Input type='text' id='email' name='email' placeholder='Emails, separated by comas or tab' required />
            </div>
            <div className='flex items-center gap-3'>
              <Checkbox id='terms' />
              <Label htmlFor='terms'>Refer 13 people from acme.com</Label>
            </div>
            <div className='flex -space-x-2'>
              {avatars.map((avatar, index) => (
                <Avatar key={index} className='ring-background ring-2'>
                  <AvatarImage src={avatar.src} alt={avatar.name} />
                  <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
              <Avatar className='ring-background ring-2'>
                <AvatarFallback className='text-xs'>+10</AvatarFallback>
              </Avatar>
            </div>
            <DialogFooter className='sm:justify-end'>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Refer</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default DialogReferAndEarnDemo
