'use client'

import { useState } from 'react'

import {
  BadgeCheckIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  RepeatIcon,
  SendIcon,
  UserPlusIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/utils'

const CardTweetDemo = () => {
  const [liked, setLiked] = useState<boolean>(true)

  return (
    <Card className='max-w-md'>
      <CardHeader className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Avatar className='ring-ring ring-2'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
            <AvatarFallback className='text-xs'>PG</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>
              Philip George <BadgeCheckIcon className='size-4 fill-sky-600 stroke-white dark:fill-sky-400' />
            </CardTitle>
            <CardDescription>@philip20</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm'>
            <UserPlusIcon />
            Follow
          </Button>
          <Button variant='ghost' size='icon' aria-label='Toggle menu'>
            <EllipsisIcon />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6 text-sm'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-6.png?width=350&format=auto'
          alt='Banner'
          className='aspect-video w-full rounded-md object-cover'
        />
        <p>
          Lost in the colors of the night 🌌✨ Sometimes the blur reveals more than clarity.{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #AbstractVibes
          </a>{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #Dreamscape
          </a>{' '}
          <a href='#' className='text-sky-600 dark:text-sky-400'>
            #VisualPoetry
          </a>
        </p>
      </CardContent>
      <CardFooter className='flex items-center gap-1'>
        <Button variant='ghost' size='sm' onClick={() => setLiked(!liked)}>
          <HeartIcon className={cn(liked && 'fill-destructive stroke-destructive')} />
          2.1K
        </Button>
        <Button variant='ghost' size='sm'>
          <MessageCircleIcon />
          1.4K
        </Button>
        <Button variant='ghost' size='sm'>
          <RepeatIcon />
          669
        </Button>
        <Button variant='ghost' size='sm'>
          <SendIcon />
          1.1K
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardTweetDemo
