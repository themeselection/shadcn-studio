import { Badge } from '@/registry/new-york/ui/badge'

const BadgeGradientOutlineDemo = () => {
  return (
    <div className='flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-0.5'>
      <Badge className='bg-background hover:bg-background text-foreground rounded-full border-none'>
        Gradient Outline
      </Badge>
    </div>
  )
}

export default BadgeGradientOutlineDemo
