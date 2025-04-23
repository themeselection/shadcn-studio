import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'

const BadgeLinkDemo = () => {
  return (
    <Badge asChild>
      <a href='#' className='focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:outline-0'>
        Link <ArrowRightIcon className='size-3' />
      </a>
    </Badge>
  )
}

export default BadgeLinkDemo
