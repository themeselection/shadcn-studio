import { Badge } from '@/components/ui/badge'

const BadgeAvatarDemo = () => {
  return (
    <Badge variant='outline' className='p-1 pr-2'>
      <img
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
        alt='Hallie Richards'
        className='size-6 rounded-full'
      />
      Avatar
    </Badge>
  )
}

export default BadgeAvatarDemo
