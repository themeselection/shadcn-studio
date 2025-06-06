import { Button } from '@/registry/new-york/ui/button'

const ButtonGradientDemo = () => {
  return (
    <Button className='from-primary via-primary/60 to-primary bg-transparent bg-gradient-to-r [background-size:200%_auto] hover:bg-transparent hover:bg-[99%_center]'>
      Get Started
    </Button>
  )
}

export default ButtonGradientDemo
