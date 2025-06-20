import { DownloadIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ButtonDownloadDemo = () => {
  return (
    <Button variant='outline' className='border-primary border-dashed shadow-none'>
      <DownloadIcon />
      Download
    </Button>
  )
}

export default ButtonDownloadDemo
