import { Button } from '@/registry/new-york/ui/button'

const ButtonAnimatedLinkDemo = () => {
  return (
    <Button
      variant='link'
      className='after:bg-primary relative !no-underline after:absolute after:bottom-2 after:h-px after:w-2/3 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'
      asChild
    >
      <a href='#'>Contact Us</a>
    </Button>
  )
}

export default ButtonAnimatedLinkDemo
