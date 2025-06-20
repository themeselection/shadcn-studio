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

const AvatarGroupPopularityIndicatorDemo = () => {
  return (
    <div className='bg-background flex flex-wrap items-center justify-center rounded-full border p-1 shadow-sm'>
      <div className='flex -space-x-1'>
        {avatars.map((avatar, index) => (
          <Avatar key={index} className='ring-background size-6 ring-2'>
            <AvatarImage src={avatar.src} alt={avatar.name} />
            <AvatarFallback className='text-xs'>{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <p className='text-muted-foreground px-2 text-xs'>
        Loved by <strong className='text-foreground font-medium'>10K+</strong> developers.
      </p>
    </div>
  )
}

export default AvatarGroupPopularityIndicatorDemo
