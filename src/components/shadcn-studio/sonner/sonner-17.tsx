'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SolidInfoSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.info('This is for your information, please note.', {
          style: {
            '--normal-bg': 'light-dark(var(--color-sky-600), var(--color-sky-400))',
            '--normal-text': 'var(--color-white)',
            '--normal-border': 'light-dark(var(--color-sky-600), var(--color-sky-400))'
          } as React.CSSProperties
        })
      }
    >
      Solid Info Toast
    </Button>
  )
}

export default SolidInfoSonnerDemo
