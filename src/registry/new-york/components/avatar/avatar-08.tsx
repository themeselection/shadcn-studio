import { CheckIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarStatusRingDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='ring-offset-background ring-2 ring-green-600 ring-offset-2 dark:ring-green-400'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <span className='absolute -end-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-600 dark:bg-green-400'>
        <CheckIcon className='size-3 text-white' />
      </span>
    </div>
  )
}

export default AvatarStatusRingDemo
