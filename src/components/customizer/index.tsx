'use client'

// React Imports
import { useState, useEffect } from 'react'

// Third-party Imports
import { Palette, X } from 'lucide-react'
import Shepherd from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'

// Component Imports
import ThemeControlPanel from './ThemeControlPanel'
import { RainbowButton } from '@/registry/new-york/ui/rainbow-button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/registry/new-york/ui/sheet'

// Styles Imports
import './shepherd.css'

export function ThemeCustomizer() {
  // States
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Initialize the tour
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'shadow-md rounded-lg',
        scrollTo: true,
        cancelIcon: {
          enabled: true
        }
      }
    })

    // Add steps to the tour
    tour.addStep({
      id: 'theme-customizer-intro',
      title: 'shadcn/ui Theme Editor 🤩',
      text: 'Transform your shadcn components in real time—customize, save, and ship stunning interfaces faster than ever.',
      attachTo: {
        element: '[data-tour="theme-customizer"]',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Skip',
          action: tour.complete,
          classes: 'shepherd-button-secondary'
        },
        {
          text: 'Start Customizing',
          action: () => {
            setOpen(true)
            tour.complete()
          }
        }
      ]
    })

    // Start the tour if it hasn't been shown before
    const hasSeenTour = localStorage.getItem('theme-customizer-tour-completed')

    if (!hasSeenTour) {
      tour.start()
      tour.on('complete', () => {
        localStorage.setItem('theme-customizer-tour-completed', 'true')
      })
    }

    return () => {
      tour.complete()
    }
  }, [])

  return (
    <Sheet open={open} modal={false}>
      <SheetTrigger asChild onClick={() => setOpen(true)}>
        <RainbowButton className='cursor-pointer' aria-label='Theme customizer' data-tour='theme-customizer'>
          <Palette className='h-4 w-4' />
        </RainbowButton>
      </SheetTrigger>
      <SheetContent className='h-full w-full gap-0 sm:max-w-[400px] [&>button]:hidden'>
        <SheetHeader className='min-h-(--header-height) flex-row items-center justify-between border-b border-dashed px-6'>
          <SheetTitle>Theme Customizer</SheetTitle>
          <SheetClose
            className='hover:bg-muted flex size-7 cursor-pointer items-center justify-center rounded transition-colors'
            onClick={() => setOpen(false)}
          >
            <X className='size-4' />
          </SheetClose>
        </SheetHeader>
        <ThemeControlPanel />
      </SheetContent>
    </Sheet>
  )
}
