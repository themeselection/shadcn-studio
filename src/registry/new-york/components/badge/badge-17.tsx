import { Badge } from '@/registry/new-york/ui/badge'

const BadgeBlockedDemo = () => {
  return (
    <Badge className='bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive rounded-full border-none focus-visible:outline-none'>
      <span className='bg-destructive size-1.5 rounded-full' aria-hidden='true' />
      Blocked
    </Badge>
  )
}

export default BadgeBlockedDemo
