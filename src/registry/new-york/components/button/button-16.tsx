import { ArrowLeftIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGhostDemo = () => {
  return (
    <Button variant='ghost' className='group'>
      <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-0.5' />
      Go to settings
    </Button>
  )
}

export default ButtonGhostDemo
