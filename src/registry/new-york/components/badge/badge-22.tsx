import { Badge } from '@/registry/new-york/ui/badge'

const BadgeAvatarDemo = () => {
  return (
    <Badge variant='outline' className='rounded-full p-1 pe-2'>
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
