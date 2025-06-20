import * as motion from 'motion/react-client'

import { Button } from '@/components/ui/button'

const ButtonTapAnimationDemo = () => {
  return (
    <Button className='transition-none' asChild>
      <motion.button whileTap={{ scale: 0.85 }}>Tap Animation</motion.button>
    </Button>
  )
}

export default ButtonTapAnimationDemo
