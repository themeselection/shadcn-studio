'use client'

import { useState } from 'react'

import { SunIcon, MoonIcon } from 'lucide-react'

import { Button } from '@/registry/new-york/ui/button'

import { cn } from '@/registry/new-york/lib/utils'

const IconButtonModeDemo = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setIsDark(!isDark)}
      aria-label='Toggle dark mode'
      className={cn(
        isDark
          ? 'border-sky-600 text-sky-600! hover:bg-sky-600/10 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400! dark:hover:bg-sky-400/10 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40'
          : 'border-amber-600 text-amber-600! hover:bg-amber-600/10 focus-visible:border-amber-600 focus-visible:ring-amber-600/20 dark:border-amber-400 dark:text-amber-400! dark:hover:bg-amber-400/10 dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/40'
      )}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default IconButtonModeDemo
