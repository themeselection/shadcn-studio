import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarRoundedDemo = () => {
  return (
    <Avatar className='rounded-sm'>
      <AvatarImage
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
        alt='Hallie Richards'
        className='rounded-sm'
      />
      <AvatarFallback className='text-xs'>HR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarRoundedDemo
