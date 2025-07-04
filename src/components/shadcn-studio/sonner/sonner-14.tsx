'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const OutlineSuccessSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.success('Action completed successfully!', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
            '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
          } as React.CSSProperties
        })
      }
    >
      Outline Success Toast
    </Button>
  )
}

export default OutlineSuccessSonnerDemo
