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
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const AvatarGroupSizeDemo = () => {
  return (
    <div className='flex -space-x-2'>
      {avatars.map((avatar, index) => (
        <Avatar key={index} className='ring-background size-12 ring-2'>
          <AvatarImage src={avatar.src} alt={avatar.name} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}

export default AvatarGroupSizeDemo
