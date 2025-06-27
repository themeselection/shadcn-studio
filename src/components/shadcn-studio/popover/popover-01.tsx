import { StarIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

const ratings = {
  1: 0,
  2: 15,
  3: 30,
  4: 30,
  5: 225
}

const PopoverRatingsDemo = () => {
  const totalReviews = Object.values(ratings).reduce((acc, count) => acc + count, 0)
  const totalRating = Object.entries(ratings).reduce((acc, [star, count]) => acc + Number(star) * count, 0)
  const averageRating = Number((totalRating / totalReviews || 0).toFixed(2))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <StarIcon />
          <span className='sr-only'>Ratings & reviews</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-1'>
            <div className='flex items-center gap-1'>
              <span className='text-xl font-semibold'>{averageRating}</span>
              <StarIcon className='size-5 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
            </div>
            <div className='text-sm font-medium'>Total {totalReviews} reviews</div>
            <p className='text-muted-foreground text-sm'>All reviews are from genuine customers.</p>
          </div>
          <div className='grid'>
            <div className='flex items-center justify-between'>
              <Badge variant='secondary'>+6 this week</Badge>
              <a href='#' className='text-sm hover:underline'>
                See all
              </a>
            </div>
            <Separator className='my-2' />
            <ul className='space-y-2'>
              {Object.entries(ratings)
                .reverse()
                .map(([star, count]) => (
                  <li key={star} className='flex items-center gap-2'>
                    <span className='shrink-0 text-sm'>{star} star</span>
                    <Progress value={(count / totalReviews) * 100} className='w-full' />
                    <span className='shrink-0 text-sm'>{count.toString()}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverRatingsDemo
