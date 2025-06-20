import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ButtonIconHoverDemo = () => {
  return (
    <Button className='group'>
      Get In Touch
      <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
    </Button>
  )
}

export default ButtonIconHoverDemo
