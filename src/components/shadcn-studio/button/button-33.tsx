'use client'

import { useState } from 'react'

import { MenuIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const IconButtonToggleDemo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Button variant='ghost' size='icon' onClick={() => setIsOpen(!isOpen)} aria-label='Toggle menu'>
      {isOpen ? <XIcon /> : <MenuIcon />}
    </Button>
  )
}

export default IconButtonToggleDemo
