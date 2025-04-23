'use client'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

const NavMenu = () => {
  // Hooks
  const pathname = usePathname()

  return (
    <div className='flex items-center gap-5 max-lg:hidden'>
      <Link
        href='/theme-editor'
        className={cn('text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm', {
          'text-primary hover:text-primary/80 font-medium': pathname.startsWith('/theme-editor')
        })}
      >
        Theme Editor
      </Link>
      <Link
        href='/docs/getting-started/introduction'
        className={cn('text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm', {
          'text-primary hover:text-primary/80 font-medium': pathname.startsWith('/docs/getting-started/introduction')
        })}
      >
        Docs
      </Link>
      <Link
        href='/components'
        className={cn('text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm', {
          'text-primary hover:text-primary/80 font-medium': pathname.startsWith('/components')
        })}
      >
        Components
      </Link>
    </div>
  )
}

export default NavMenu
