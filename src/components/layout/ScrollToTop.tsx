'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party Imports
import { ArrowUp } from 'lucide-react'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

const ScrollToTop = () => {
  // States
  const [showScrollButton, setShowScrollButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 320px or more
      setShowScrollButton(window.scrollY > 320)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Button
      size='icon'
      className={cn('fixed end-6 bottom-6 z-50 cursor-pointer transition-all duration-200', {
        'scale-0': !showScrollButton
      })}
      onClick={scrollToTop}
    >
      <ArrowUp className='size-4' />
      <span className='sr-only'>Scroll to top</span>
    </Button>
  )
}

export default ScrollToTop
