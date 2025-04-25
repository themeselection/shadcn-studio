// React Imports
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/registry/new-york/ui/dropdown-menu'
import CommandMenu from '@/components/layout/CommandMenu'
import Logo from '@/components/layout/Logo'
import ModeToggle from '@/components/layout/ModeToggle'
import NavMenu from '@/components/layout/NavMenu'
import { ThemeCustomizer } from '@/components/customizer'

// SVG Imports
import Github from '@/assets/svg/Github'
import X from '@/assets/svg/X'
import Discord from '@/assets/svg/Discord'

const Header = ({ toggle }: { toggle: ReactNode }) => {
  return (
    <header className='bg-background/60 sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full flex-shrink-0 items-center justify-center border-b border-dashed backdrop-blur-[8px]'>
      <div className='mx-auto flex h-full w-full max-w-[1400px] items-center border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
        <div className='flex w-full items-center max-lg:gap-4'>
          <div className='flex items-center gap-3 ps-4 sm:ps-8'>
            {toggle}
            <Link href='/'>
              <Logo className='max-[425px]:[&_span]:hidden' />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className='text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium max-sm:hidden'>
                v1.0.0-alpha.1
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link
                      href='https://github.com/themeselection/shadcn-studio/blob/main/CHANGELOG.md'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='cursor-pointer'
                    >
                      Changelog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='/#roadmap' className='cursor-pointer'>
                      Roadmap
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <nav className='flex flex-1 items-center justify-end gap-1.5 pe-4 sm:gap-4 sm:pe-8 lg:justify-between lg:ps-8'>
            <NavMenu />
            <div className='flex items-center gap-2 md:gap-4'>
              <CommandMenu />
              <ThemeCustomizer />
              <ModeToggle />
              <div className='flex items-center gap-1.5 max-md:hidden'>
                <Button variant='ghost' size='icon' className='cursor-pointer' asChild>
                  <Link
                    href='https://github.com/themeselection/shadcn-studio'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='size-5' />
                    <span className='sr-only'>Github</span>
                  </Link>
                </Button>
                <Button variant='ghost' size='icon' className='cursor-pointer' asChild>
                  <Link href='https://x.com/ajaypatel_aj' target='_blank' rel='noopener noreferrer'>
                    <X className='size-5' />
                    <span className='sr-only'>X</span>
                  </Link>
                </Button>
                <Button variant='ghost' size='icon' className='cursor-pointer' asChild>
                  <Link href='https://discord.com/invite/kBHkY7DekX' target='_blank' rel='noopener noreferrer'>
                    <Discord className='size-5' />
                    <span className='sr-only'>Discord</span>
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
