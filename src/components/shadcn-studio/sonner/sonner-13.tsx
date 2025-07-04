'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const OutlineInfoSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.info('This is for your information, please note.', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'light-dark(var(--color-sky-600), var(--color-sky-400))',
            '--normal-border': 'light-dark(var(--color-sky-600), var(--color-sky-400))'
          } as React.CSSProperties
        })
      }
    >
      Outline Info Toast
    </Button>
  )
}

export default OutlineInfoSonnerDemo
