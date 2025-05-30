import { StarIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonRoundedDemo = () => {
  return (
    <Button className='rounded-full'>
      <StarIcon />
      Star
    </Button>
  )
}

export default ButtonRoundedDemo
