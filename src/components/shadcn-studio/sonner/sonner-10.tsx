'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const SoftSuccessSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.success('Action completed successfully!', {
          style: {
            '--normal-bg':
              'color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))',
            '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
            '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
          } as React.CSSProperties
        })
      }
    >
      Soft Success Toast
    </Button>
  )
}

export default SoftSuccessSonnerDemo
