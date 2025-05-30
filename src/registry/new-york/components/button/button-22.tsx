import { AlertTriangleIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonCautionDemo = () => {
  return (
    <Button className='bg-amber-600/10 text-amber-600 hover:bg-amber-600/20 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:hover:bg-amber-400/20 dark:focus-visible:ring-amber-400/40'>
      <AlertTriangleIcon />
      Caution
    </Button>
  )
}

export default ButtonCautionDemo
