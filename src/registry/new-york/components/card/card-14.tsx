'use client'

import { useState } from 'react'

import { XIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/registry/new-york/ui/card'

const CardActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Card className='relative max-w-lg shadow-none'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setIsActive(false)}
        className='absolute end-2 top-2 rounded-full'
      >
        <XIcon />
        <span className='sr-only'>Close</span>
      </Button>
      <CardHeader>
        <CardTitle className='text-center'>Have a project in mind</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4 text-center'>
        <p>Let&apos;s discuss! Our Assistant team is excited to hear about your projects, ideas and questions. </p>
        <Button>Contact Our Team</Button>
      </CardContent>
    </Card>
  )
}

export default CardActionDemo
