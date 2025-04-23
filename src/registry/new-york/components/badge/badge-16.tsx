import { Badge } from '@/registry/new-york/ui/badge'

const BadgeInProgressDemo = () => {
  return (
    <Badge className='rounded-full border-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'>
      <span className='size-1.5 rounded-full bg-amber-600 dark:bg-amber-400' aria-hidden='true' />
      In Progress
    </Badge>
  )
}

export default BadgeInProgressDemo
