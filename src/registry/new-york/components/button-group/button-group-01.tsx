import { DownloadIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonGroupDownloadDemo = () => {
  return (
    <div className='inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
      <Button variant='outline' className='rounded-none rounded-s-md shadow-none focus-visible:z-10'>
        <DownloadIcon />
        Download
      </Button>
      <span className='bg-background dark:border-input dark:bg-input/30 flex items-center rounded-e-md border px-3 text-sm font-medium'>
        15k
      </span>
    </div>
  )
}

export default ButtonGroupDownloadDemo
