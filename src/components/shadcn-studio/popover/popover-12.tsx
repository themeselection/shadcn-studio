import { ChevronRightIcon, MapPinIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const PopoverAboutHimalayasDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <MapPinIcon />
          <span className='sr-only'>About Himalayas</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-85 p-0'>
        <div className='flex'>
          <div className='space-y-2 p-4'>
            <p className='font-medium'>About Himalayas</p>
            <p className='text-muted-foreground text-xs'>
              The Great Himalayan mountain ranges in the Indian sub-continent region.{' '}
            </p>
            <a
              href='https://en.wikipedia.org/wiki/Himalayas'
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-fit text-xs hover:underline'
            >
              Read more
              <ChevronRightIcon className='size-4' />
            </a>
          </div>
          <img
            src='https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg?height=136'
            alt='the himalayas'
            className='h-34 w-2/5 rounded-r-md object-cover'
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverAboutHimalayasDemo
