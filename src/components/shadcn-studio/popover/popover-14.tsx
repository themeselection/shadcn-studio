import { useId } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const members = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    designation: 'Product Manager'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    designation: 'Software Engineer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    designation: 'UI/UX Designer'
  }
]

const PopoverSlideInBottomDemo = () => {
  const id = useId()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Slide-in from bottom</Button>
      </PopoverTrigger>
      <PopoverContent className='data-[state=open]:slide-in-from-bottom-20 data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 w-80 duration-400'>
        <div className='grid gap-4'>
          <div className='space-y-1'>
            <div className='font-medium'>Share to team members</div>
            <p className='text-muted-foreground text-sm'>
              Give your team members access to this project and start collaborating in real time
            </p>
          </div>
          <div className='w-full space-y-1.5'>
            <Label htmlFor={id} className='text-muted-foreground text-xs font-normal'>
              Email address
            </Label>
            <div className='flex gap-2'>
              <Input id={id} type='email' placeholder='example@xyz.com' className='h-8' />
              <Button type='submit' size='sm'>
                Share invite
              </Button>
            </div>
          </div>
          <div className='space-y-1.5'>
            <Label className='text-muted-foreground text-xs font-normal'>Team members</Label>
            <ul className='grid gap-2'>
              {members.map((member, index) => (
                <li key={index} className='flex items-center gap-3'>
                  <Checkbox id={`member-${index + 1}`} />
                  <Label htmlFor={`member-${index + 1}`} className='flex flex-1 items-center gap-2'>
                    <div className='flex flex-1 items-center gap-2'>
                      <Avatar className='size-6'>
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className='text-xs'>{member.fallback}</AvatarFallback>
                      </Avatar>
                      <span className='text-sm font-medium'>{member.name}</span>
                    </div>
                    <span className='text-muted-foreground text-xs'>{member.designation}</span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverSlideInBottomDemo
