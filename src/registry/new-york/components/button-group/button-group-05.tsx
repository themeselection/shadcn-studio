import { DribbbleIcon, FacebookIcon, InstagramIcon, TwitchIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupSocialDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button
        variant='outline'
        className='rounded-none rounded-s-md shadow-none hover:!bg-[#9146ff]/10 focus-visible:z-10'
        asChild
      >
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <TwitchIcon className='stroke-[#9146ff]' />
          <span className='sr-only'>Twitch</span>
        </a>
      </Button>
      <Button variant='outline' className='rounded-none shadow-none hover:!bg-[#EA4C89]/10 focus-visible:z-10' asChild>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <DribbbleIcon className='stroke-[#EA4C89]' />
          <span className='sr-only'>Dribbble</span>
        </a>
      </Button>
      <Button variant='outline' className='rounded-none shadow-none hover:!bg-[#fb169a]/10 focus-visible:z-10' asChild>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon className='stroke-[#fb169a]' />
          <span className='sr-only'>Instagram</span>
        </a>
      </Button>
      <Button
        variant='outline'
        className='rounded-none rounded-e-md shadow-none hover:!bg-[#0866ff]/10 focus-visible:z-10'
        asChild
      >
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <FacebookIcon className='stroke-[#0866ff]' />
          <span className='sr-only'>Facebook</span>
        </a>
      </Button>
    </div>
  )
}

export default ButtonGroupSocialDemo
