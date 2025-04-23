// React Imports
import type { ReactNode } from 'react'

// Component Imports
import FrontLayout from '@/components/layout/FrontLayout'

const Layout = ({ children }: { children: ReactNode }) => {
  return <FrontLayout>{children}</FrontLayout>
}

export default Layout
