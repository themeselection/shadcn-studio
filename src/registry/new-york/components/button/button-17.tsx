import { LoaderCircleIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonLoadingDemo = () => {
  return (
    <Button disabled>
      <LoaderCircleIcon className='animate-spin' />
      Loading
    </Button>
  )
}

export default ButtonLoadingDemo
