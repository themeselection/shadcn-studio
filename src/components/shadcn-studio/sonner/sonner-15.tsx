'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const OutlineWarningSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.warning('Warning: Please check the entered data.', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'light-dark(var(--color-amber-600), var(--color-amber-400))',
            '--normal-border': 'light-dark(var(--color-amber-600), var(--color-amber-400))'
          } as React.CSSProperties
        })
      }
    >
      Outline Warning Toast
    </Button>
  )
}

export default OutlineWarningSonnerDemo
