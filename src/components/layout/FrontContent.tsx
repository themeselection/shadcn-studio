// React Imports
import type { ReactNode } from 'react'

// Component Imports
import ScrollToTop from '@/components/layout/ScrollToTop'

const FrontContent = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-1 flex-col'>
      <div className='mx-auto h-full w-full max-w-[1400px] border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]'>
        {children}
      </div>
      <ScrollToTop />
    </main>
  )
}

export default FrontContent
