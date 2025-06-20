// React Imports
import type { CSSProperties, ReactNode } from 'react'

// Component Imports
import { SidebarProvider } from '@/components/ui/sidebar'
import PagesLayout from '@/components/layout/PagesLayout'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '18.75rem',
          '--sidebar-width-mobile': '18.75rem'
        } as CSSProperties
      }
    >
      <PagesLayout>{children}</PagesLayout>
    </SidebarProvider>
  )
}

export default Layout
