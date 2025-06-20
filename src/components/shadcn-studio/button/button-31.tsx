import { BookmarkIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const IconButtonDemo = () => {
  return (
    <Button variant='outline' size='icon'>
      <BookmarkIcon />
      <span className='sr-only'>Bookmark</span>
    </Button>
  )
}

export default IconButtonDemo
