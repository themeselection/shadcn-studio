import { LoaderCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ButtonLoadingDemo = () => {
  return (
    <Button disabled>
      <LoaderCircleIcon className='animate-spin' />
      Loading
    </Button>
  )
}

export default ButtonLoadingDemo
