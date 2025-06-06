import { CircleFadingPlus } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'

const CardInviteCardDemo = () => {
  return (
    <Card className='w-full max-w-lg'>
      <CardHeader>
        <CardTitle>Meeting Notes</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4 sm:grid-cols-2'>
        <div className='flex items-center gap-4'>
          <CircleFadingPlus />
          <span className='text-sm font-semibold'>Invite Member </span>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>JA</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Jimmy Androson </span>
            <span className='text-muted-foreground text-sm'>UI Designer</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>DA</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Dean Ambrose </span>
            <span className='text-muted-foreground text-sm'>UX Designer</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Avatar>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>HR</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold'>Anita John</span>
            <span className='text-muted-foreground text-sm'>Branding</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </CardContent>
    </Card>
  )
}

export default CardInviteCardDemo
