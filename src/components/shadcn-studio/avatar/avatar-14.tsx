import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  }
]

const AvatarGroupMaxDemo = () => {
  return (
    <div className='flex -space-x-2'>
      {avatars.map((avatar, index) => (
        <Avatar key={index} className='ring-background ring-2'>
          <AvatarImage src={avatar.src} alt={avatar.name} />
          <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
      <Avatar className='ring-background ring-2'>
        <AvatarFallback className='text-xs'>+9</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default AvatarGroupMaxDemo
