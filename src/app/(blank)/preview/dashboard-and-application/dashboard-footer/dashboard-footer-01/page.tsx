import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const Footer = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider>
        <Sidebar>
          <div className='border-sidebar-foreground/10 m-6 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--sidebar-foreground)10%,transparent),color-mix(in_oklab,var(--sidebar-foreground)10%,transparent)_1px,var(--sidebar)_2px,var(--sidebar)_15px)]' />
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 flex h-13.75 items-center justify-between gap-6 border-b px-4 py-2 sm:px-6'>
            <SidebarTrigger className='[&_svg]:!size-5' />
          </header>
          <main className='size-full flex-1 px-4 py-6 sm:px-6'>
            <Card className='h-250'>
              <CardContent className='h-full'>
                <div className='border-card-foreground/10 h-full rounded-md border bg-[repeating-linear-gradient(45deg,color-mix(in_oklab,var(--card-foreground)10%,transparent),color-mix(in_oklab,var(--card-foreground)10%,transparent)_1px,var(--card)_2px,var(--card)_15px)]' />
              </CardContent>
            </Card>
          </main>
          <footer className='text-muted-foreground flex items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6 md:max-lg:flex-col'>
            <p className='text-center text-sm text-balance'>
              {`©${new Date().getFullYear()}`}{' '}
              <a href='#' className='text-primary'>
                Shadcn/studio
              </a>
              , Made for better web design
            </p>
            <div className='flex items-center gap-5'>
              <a href='#'>
                <FacebookIcon className='size-4' />
              </a>
              <a href='#'>
                <InstagramIcon className='size-4' />
              </a>
              <a href='#'>
                <LinkedinIcon className='size-4' />
              </a>
              <a href='#'>
                <TwitterIcon className='size-4' />
              </a>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Footer
