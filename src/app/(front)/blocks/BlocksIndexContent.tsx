'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import { clsx } from 'clsx'

// Component Imports
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Util Imports
import { getSectionData } from '@/utils/blocks'

// Data Imports
import { blockCategories } from '@/assets/data/blocks-index'

const BlocksIndexContent = () => {
  // States
  const [activeSection, setActiveSection] = useState('marketing-ui')

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - (64 + 70 + 64)

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToSection = (sectionId: string) => (e: MouseEvent) => {
    e.preventDefault()
    window.location.hash = sectionId
    handleScroll(sectionId)
  }

  const getLinkClassName = (sectionId: string) => {
    return clsx(
      'flex items-center gap-2 border-b-2 p-5 text-lg whitespace-nowrap transition-all duration-300 ease-in-out',
      {
        'text-primary border-primary': activeSection === sectionId,
        'hover:text-primary hover:border-primary/30 border-transparent': activeSection !== sectionId
      }
    )
  }

  // Scroll to the active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '40% 0px -50% 0px',
        threshold: 0.8
      }
    )

    // Observe all sections
    document.querySelectorAll('h2').forEach(section => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Add effect to handle initial hash scroll
  useEffect(() => {
    const handleInitialScroll = () => {
      const hash = window.location.hash.slice(1)

      if (hash) {
        handleScroll(hash)
      }
    }

    // Run after a short delay on mount to ensure DOM is ready
    const timeoutId = setTimeout(handleInitialScroll, 1000)

    // Handle hash changes
    window.addEventListener('hashchange', handleInitialScroll)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('hashchange', handleInitialScroll)
    }
  }, [])

  return (
    <>
      <div className='bg-background/60 sticky top-16 z-12 ml-px border-b border-dashed backdrop-blur-[8px]'>
        <div className='-mb-0.5 flex max-w-screen-2xl overflow-x-auto px-4 sm:px-6 lg:px-8'>
          {blockCategories.map(block => (
            <Link
              key={block.slug}
              href={`#${block.slug}`}
              onClick={scrollToSection(block.slug)}
              className={getLinkClassName(block.slug)}
            >
              {block.navTitle}
              {block.isNew && <Badge className='rounded-full'>New</Badge>}
            </Link>
          ))}
        </div>
      </div>

      {blockCategories.map((category, index) => (
        <section key={category.slug}>
          <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
            <h2 id={category.slug} className='mb-4 text-3xl font-semibold sm:text-4xl'>
              {category.title}
            </h2>
            <p className='text-foreground/80 mb-11 text-lg'>{category.description}</p>
            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
              {category.sections.map((section, index) => {
                const sectionBlocksData = getSectionData(category.slug, section.slug)

                return (
                  <Link key={index} href={section.url} className='flex flex-col'>
                    <Card className='gap-0 overflow-hidden p-0 shadow-none'>
                      <CardContent className='bg-muted flex h-[208px] items-center justify-center border-b p-6'>
                        {/* Light mode image */}
                        <img
                          src={`${section.imgSrc}?height=159&format=auto`}
                          alt={section.imgAlt}
                          className='max-h-full dark:hidden'
                        />
                        {/* Dark mode image */}
                        <img
                          src={`${section.imgSrc.replace('.png', '-dark.png')}?height=159&format=auto`}
                          alt={section.imgAlt}
                          className='hidden max-h-full dark:inline-block'
                        />
                      </CardContent>
                      <CardContent className='flex flex-col gap-1.5 py-3.5'>
                        <CardTitle className='flex items-center gap-2 text-lg'>
                          {section.title}
                          {section.isNew && (
                            <Badge className='bg-primary/10 text-primary rounded-full'>{section.isNew}</Badge>
                          )}
                        </CardTitle>
                        <p>{`${sectionBlocksData.length} block${sectionBlocksData.length === 1 ? '' : 's'}`}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
          {index !== blockCategories.length - 1 && (
            <div className='via-foreground/20 mx-auto h-px w-3/5 bg-gradient-to-r from-transparent to-transparent' />
          )}
        </section>
      ))}
    </>
  )
}

export default BlocksIndexContent
