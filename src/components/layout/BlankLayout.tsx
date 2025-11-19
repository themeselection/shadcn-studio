// React Imports
import type { ReactNode } from 'react'

const BlankLayout = ({ children }: { children: ReactNode }) => {
  return <div className='h-full w-full'>{children}</div>
}

export default BlankLayout
