import { BookmarkIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const IconButtonDemo = () => {
  return (
    <Button variant='outline' size='icon'>
      <BookmarkIcon />
      <span className='sr-only'>Bookmark</span>
    </Button>
  )
}

export default IconButtonDemo
