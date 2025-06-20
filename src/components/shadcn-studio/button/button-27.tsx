import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const ButtonAvatarDemo = () => {
  return (
    <Button className='rounded-full ps-2'>
      <Avatar className='size-6'>
        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
        <AvatarFallback className='text-foreground text-xs'>HR</AvatarFallback>
      </Avatar>
      @hallierichards
    </Button>
  )
}

export default ButtonAvatarDemo
