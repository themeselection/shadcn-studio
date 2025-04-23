// SVG Imports
import AppLogo from '@/assets/svg/Logo'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <AppLogo className='size-8.5 dark:invert' />
      <span className='ms-2.5 text-xl font-semibold'>shadcn/studio</span>
    </div>
  )
}

export default Logo
