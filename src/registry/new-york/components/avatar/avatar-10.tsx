import { PlusCircleIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarPlusDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-10'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <button className='focus-visible:ring-ring/50 absolute -end-1 -bottom-1 inline-flex cursor-pointer items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:outline-none'>
        <PlusCircleIcon className='text-background size-5 fill-slate-400' />
        <span className='sr-only'>Add</span>
      </button>
    </div>
  )
}

export default AvatarPlusDemo
