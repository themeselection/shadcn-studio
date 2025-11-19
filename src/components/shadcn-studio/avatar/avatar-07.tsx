import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarStatusBusyDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <span className='border-background bg-destructive absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2'>
        <span className='sr-only'>Busy</span>
      </span>
    </div>
  )
}

export default AvatarStatusBusyDemo
