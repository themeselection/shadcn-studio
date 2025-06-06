import { StarIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar'
import { Card, CardFooter, CardContent, CardTitle, CardDescription } from '@/registry/new-york/ui/card'

const CardTestimonialDemo = () => {
  return (
    <Card className='max-w-md border-none'>
      <CardContent>
        <p>
          Incredible time-saver! FlyonUI has made UI development a breeze. The pre build components are not only{' '}
          <span className='bg-primary/10'>visually appealing but also highly customizable</span>, fitting seamlessly
          into my projects. With a wide array of options to choose from, I can easily match.
        </p>
      </CardContent>
      <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
        <div className='flex items-center gap-3'>
          <Avatar className='ring-ring ring-2'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>SG</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>Sam Green</CardTitle>
            <CardDescription>@SamG11</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400'></StarIcon>
          <StarIcon className='size-5 stroke-amber-500 dark:stroke-amber-400'></StarIcon>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardTestimonialDemo
