import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const BadgeStatusOnlineDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='size-10'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback>HR</AvatarFallback>
      </Avatar>
      <span className='border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-green-600 dark:bg-green-400'>
        <span className='sr-only'>Online</span>
      </span>
    </div>
  )
}

export default BadgeStatusOnlineDemo
