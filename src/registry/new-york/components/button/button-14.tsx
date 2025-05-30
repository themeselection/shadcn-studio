import { DownloadIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonDownloadDemo = () => {
  return (
    <Button variant='outline' className='border-primary border-dashed shadow-none'>
      <DownloadIcon />
      Download
    </Button>
  )
}

export default ButtonDownloadDemo
