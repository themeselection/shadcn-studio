import { CircleAlert } from 'lucide-react'

import { Alert, AlertTitle, AlertDescription } from '@/registry/new-york/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AlertWithAvatarDemo = () => {
  return (
    <Alert className='flex items-center justify-between'>
      <Avatar className='rounded-sm'>
        <AvatarImage
          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          alt='Hallie Richards'
          className='rounded-sm'
        />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <div className='flex-1 flex-col justify-center gap-1'>
        <AlertTitle className='flex-1'>Sara has replied on the uploaded image.</AlertTitle>
        <AlertDescription>12 unread messages. Tap to see.</AlertDescription>
      </div>
      <CircleAlert />
    </Alert>
  )
}

export default AlertWithAvatarDemo
