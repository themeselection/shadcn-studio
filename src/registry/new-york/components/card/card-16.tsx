'use client'

import { useEffect } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'

const CardSpotlightDemo = () => {
  useEffect(() => {
    const all = document.querySelectorAll('.spotlight-card')

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector('.blob') as HTMLElement
        const fblob = e.querySelector('.fake-blob') as HTMLElement

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()

        blob.style.opacity = '1'

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 2
              }px, ${ev.clientY - rec.top - rec.height / 2}px)`
            }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='h-max w-max'>
      <div className='spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out'>
        <Card className='group-hover:bg-card/90 max-w-80 border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px]'>
          <CardHeader>
            <CardTitle>Hover for the Glow-Up</CardTitle>
          </CardHeader>
          <CardContent>
            Glide your cursor here and watch magic unfold — an experience designed just for you.
          </CardContent>
        </Card>
        <div className='blob absolute start-0 top-0 h-20 w-20 rounded-full bg-sky-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out dark:bg-sky-400/60' />
        <div className='fake-blob absolute start-0 top-0 h-20 w-20 rounded-full' />
      </div>
    </div>
  )
}

export default CardSpotlightDemo
