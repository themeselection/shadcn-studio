'use client'

// React Imports
import type { ComponentProps } from 'react'

// Third-party Imports
import { ThemeProvider } from 'next-themes'

const NextProvider = ({ children, ...props }: ComponentProps<typeof ThemeProvider>) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default NextProvider
