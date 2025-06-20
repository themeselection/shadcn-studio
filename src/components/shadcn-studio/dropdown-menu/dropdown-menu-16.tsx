'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'

const DropdownMenuSlideUpAnimationDemo = () => {
  const [googleSwitch, setGoogleSwitch] = useState(false)
  const [twitterSwitch, setTwitterSwitch] = useState(false)
  const [linkedinSwitch, setLinkedinSwitch] = useState(false)
  const [dribbbleSwitch, setDribbbleSwitch] = useState(false)
  const [behanceSwitch, setBehanceSwitch] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Slide Up Animation</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='data-[state=closed]:slide-out-to-left-0 data-[state=open]:slide-in-from-left-0 data-[state=closed]:slide-out-to-bottom-20 data-[state=open]:slide-in-from-bottom-20 data-[state=closed]:zoom-out-100 w-56 duration-400'>
        <DropdownMenuLabel>Apps notification</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className='justify-between' onSelect={event => event.preventDefault()}>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/google.png'
              alt='google'
              className='size-4'
            ></img>
            <span className='flex-1'>Google</span>
            <Switch id='airplane-mode' checked={googleSwitch} onCheckedChange={setGoogleSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between' onSelect={event => event.preventDefault()}>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/twitter.png'
              alt='twitter'
              className='size-4'
            ></img>
            <span className='flex-1'>Twitter</span>
            <Switch id='airplane-mode' checked={twitterSwitch} onCheckedChange={setTwitterSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between' onSelect={event => event.preventDefault()}>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/linkedin.png'
              alt='linkedin'
              className='size-4'
            ></img>
            <span className='flex-1'>Linkedin</span>
            <Switch id='airplane-mode' checked={linkedinSwitch} onCheckedChange={setLinkedinSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between' onSelect={event => event.preventDefault()}>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/dribbble.png'
              alt='dribbble'
              className='size-4'
            ></img>
            <span className='flex-1'>Dribbble</span>
            <Switch id='airplane-mode' checked={dribbbleSwitch} onCheckedChange={setDribbbleSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between' onSelect={event => event.preventDefault()}>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/behance.png'
              alt='behance'
              className='size-4'
            ></img>
            <span className='flex-1'>Behance</span>
            <Switch id='airplane-mode' checked={behanceSwitch} onCheckedChange={setBehanceSwitch} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuSlideUpAnimationDemo
