import { Trash2Icon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonDiscardDemo = () => {
  return (
    <Button
      variant='outline'
      className='hover:bg-destructive/10! text-destructive! border-destructive! focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40'
    >
      <Trash2Icon />
      Discard
    </Button>
  )
}

export default ButtonDiscardDemo
