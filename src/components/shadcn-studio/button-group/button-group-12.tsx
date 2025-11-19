import { BoxIcon, ChartBarBigIcon, SettingsIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ButtonGroupGhostDemo = () => {
  return (
    <div className='inline-flex w-fit rounded-md rtl:space-x-reverse'>
      <Button variant='ghost' className='rounded-none rounded-l-md focus-visible:z-10'>
        <SettingsIcon />
        Settings
      </Button>
      <Button variant='ghost' className='rounded-none focus-visible:z-10'>
        <BoxIcon />
        Dashboard
      </Button>
      <Button variant='ghost' className='rounded-none rounded-r-md focus-visible:z-10'>
        <ChartBarBigIcon />
        Analytics
      </Button>
    </div>
  )
}

export default ButtonGroupGhostDemo
