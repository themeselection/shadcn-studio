import { Redo2Icon, Undo2Icon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonIconDemo = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Button variant='outline'>
        <Undo2Icon />
        Undo
      </Button>
      <Button variant='outline'>
        Redo
        <Redo2Icon />
      </Button>
    </div>
  )
}

export default ButtonIconDemo
