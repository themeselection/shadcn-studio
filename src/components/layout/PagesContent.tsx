// React Imports
import type { ReactNode } from 'react'

// Component Imports
import ScrollToTop from '@/components/layout/ScrollToTop'

const PagesContent = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-1'>
      <div className='flex flex-1 flex-col' id='main-section'>
        {children}
      </div>
      <ScrollToTop />
    </main>
  )
}

export default PagesContent
