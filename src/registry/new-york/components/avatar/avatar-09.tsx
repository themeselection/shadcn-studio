import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'

const AvatarStatusAwayDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar className='rounded-sm'>
        <AvatarImage
          src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          alt='Hallie Richards'
          className='rounded-sm'
        />
        <AvatarFallback className='text-xs'>HR</AvatarFallback>
      </Avatar>
      <span className='border-background absolute -end-1.5 -top-1.5 size-3 rounded-full border-2 bg-amber-600 dark:bg-amber-400'>
        <span className='sr-only'>Away</span>
      </span>
    </div>
  )
}

export default AvatarStatusAwayDemo
