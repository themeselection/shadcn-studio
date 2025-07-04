'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

const OutlineDestructiveSonnerDemo = () => {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.error('Oops, there was an error processing your request.', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'var(--destructive)',
            '--normal-border': 'var(--destructive)'
          } as React.CSSProperties
        })
      }
    >
      Outline Destructive Toast
    </Button>
  )
}

export default OutlineDestructiveSonnerDemo
