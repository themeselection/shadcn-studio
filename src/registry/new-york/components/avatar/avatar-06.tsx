import { HomeIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/registry/new-york/ui/avatar'

const AvatarIconDemo = () => {
  return (
    <Avatar>
      <AvatarFallback className='bg-indigo-500/10 text-indigo-500'>
        <HomeIcon className='size-4' />
      </AvatarFallback>
    </Avatar>
  )
}

export default AvatarIconDemo
