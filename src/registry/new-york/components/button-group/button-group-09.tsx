import { CopyIcon, SquarePenIcon, Trash2Icon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupActionsDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button variant='outline' className='rounded-none rounded-s-md shadow-none focus-visible:z-10'>
        <SquarePenIcon />
        Edit
      </Button>
      <Button variant='outline' className='rounded-none shadow-none focus-visible:z-10'>
        <CopyIcon />
        Duplicate
      </Button>
      <Button variant='outline' className='rounded-none rounded-e-md shadow-none focus-visible:z-10'>
        <Trash2Icon />
        Delete
      </Button>
    </div>
  )
}

export default ButtonGroupActionsDemo
