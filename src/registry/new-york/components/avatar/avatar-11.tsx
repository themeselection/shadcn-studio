import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Badge } from '@/registry/new-york/ui/badge'

const AvatarNotificationBadgeDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-10 rounded-sm'>
        <AvatarImage
          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          alt='Hallie Richards'
          className='rounded-sm'
        />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <Badge className='absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full bg-indigo-500 px-1 tabular-nums'>8</Badge>
    </div>
  )
}

export default AvatarNotificationBadgeDemo
