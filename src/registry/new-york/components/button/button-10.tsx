import { TrashIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonDeleteDemo = () => {
  return (
    <Button className='from-destructive via-destructive/60 to-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 bg-transparent bg-gradient-to-r [background-size:200%_auto] text-white hover:bg-transparent hover:bg-[99%_center]'>
      <TrashIcon />
      Delete
    </Button>
  )
}

export default ButtonDeleteDemo
