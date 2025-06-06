import { ZapIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

const ButtonUpgradeDemo = () => {
  return (
    <Button className='bg-transparent bg-gradient-to-r from-amber-600 via-amber-600/60 to-amber-600 [background-size:200%_auto] text-white hover:bg-transparent hover:bg-[99%_center] focus-visible:ring-amber-600/20 dark:from-amber-400 dark:via-amber-400/60 dark:to-amber-400 dark:focus-visible:ring-amber-400/40'>
      Upgrade <ZapIcon />
    </Button>
  )
}

export default ButtonUpgradeDemo
