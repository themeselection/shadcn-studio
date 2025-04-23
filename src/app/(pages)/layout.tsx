// React Imports
import type { ReactNode } from 'react'

// Component Imports
import { SidebarProvider } from '@/registry/new-york/ui/sidebar'
import PagesLayout from '@/components/layout/PagesLayout'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <PagesLayout>{children}</PagesLayout>
    </SidebarProvider>
  )
}

export default Layout
