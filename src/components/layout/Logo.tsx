// SVG Imports
import AppLogo from '@/assets/svg/Logo'

// Util Imports
import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)} aria-label='shadcn/studio'>
      <AppLogo className='size-8.5 dark:invert' />
      <span className='ms-2.5 text-xl font-semibold'>shadcn/studio</span>
    </div>
  )
}

export default Logo
