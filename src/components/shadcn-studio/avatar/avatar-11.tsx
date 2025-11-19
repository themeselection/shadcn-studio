import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

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
      <Badge className='absolute -top-2.5 -right-2.5 h-5 min-w-5 bg-indigo-500 px-1 tabular-nums'>8</Badge>
    </div>
  )
}

export default AvatarNotificationBadgeDemo
