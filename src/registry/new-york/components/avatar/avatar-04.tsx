import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarSizeDemo = () => {
  return (
    <Avatar className='size-12'>
      <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
      <AvatarFallback className='text-xs'>HR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarSizeDemo
