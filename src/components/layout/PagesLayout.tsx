// React Imports
import type { ReactNode } from 'react'

// Component Imports
import PagesContent from '@/components/layout/PagesContent'
import Header from '@/components/layout/Header'
import AppSidebar, { CustomSidebarTrigger } from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-full w-full min-w-0 flex-col'>
      <Header toggle={<CustomSidebarTrigger />} />
      <div className='flex flex-1'>
        <div className='mx-auto flex w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
          <AppSidebar />
          <PagesContent>{children}</PagesContent>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PagesLayout
