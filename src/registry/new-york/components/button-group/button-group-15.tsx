import * as motion from 'motion/react-client'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupScaleDemo = () => {
  return (
    <div className='divide-primary-foreground/30 inline-flex w-fit divide-x rounded-md shadow-xs'>
      <Button className='rounded-none rounded-s-md shadow-none transition-none focus-visible:z-10' asChild>
        <motion.button whileTap={{ scale: 0.9 }}>
          <ChevronLeftIcon />
          Previous
        </motion.button>
      </Button>
      <Button className='rounded-none rounded-e-md shadow-none transition-none focus-visible:z-10' asChild>
        <motion.button whileTap={{ scale: 0.9 }}>
          Next
          <ChevronRightIcon />
        </motion.button>
      </Button>
    </div>
  )
}

export default ButtonGroupScaleDemo
