import { Button } from '@/components/ui/button'

const ButtonRingHoverDemo = () => {
  return (
    <Button className='ring-offset-background hover:ring-primary/90 transition-all duration-300 hover:ring-2 hover:ring-offset-2'>
      Ring Hover
    </Button>
  )
}

export default ButtonRingHoverDemo
