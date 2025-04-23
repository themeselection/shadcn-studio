import { BadgeCheckIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarVerifiedDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-10'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <span className='absolute -end-1.5 -top-1.5'>
        <span className='sr-only'>Verified</span>
        <BadgeCheckIcon className='text-background size-5 fill-sky-500' />
      </span>
    </div>
  )
}

export default AvatarVerifiedDemo
