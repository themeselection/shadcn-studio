// React Imports
import type { ReactNode } from 'react'

// Component Imports
import FrontContent from '@/components/layout/FrontContent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FrontMenuToggle from '@/components/layout/FrontMenuToggle'

const FrontLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-full w-full min-w-0 flex-col'>
      <Header toggle={<FrontMenuToggle />} />
      <FrontContent>{children}</FrontContent>
      <Footer />
    </div>
  )
}

export default FrontLayout
