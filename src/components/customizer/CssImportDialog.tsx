// React Imports
import { useState } from 'react'

// Third-party Imports
import { AlertCircle } from 'lucide-react'

// Component Imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/registry/new-york/ui/dialog'
import { Button } from '@/registry/new-york/ui/button'
import { Textarea } from '@/registry/new-york/ui/textarea'
import { Alert, AlertDescription } from '@/registry/new-york/ui/alert'

type CssImportDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onImport: (css: string) => void
}

const CssImportDialog = ({ open, onOpenChange, onImport }: CssImportDialogProps) => {
  // States
  const [cssText, setCssText] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleImport = () => {
    // Basic validation - check if the CSS contains some expected variables
    if (!cssText.trim()) {
      setError('Please enter CSS content')

      return
    }

    try {
      // Here you would add more sophisticated CSS parsing validation
      // For now we'll just do a simple check
      if (!cssText.includes('--') || !cssText.includes(':')) {
        setError('Invalid CSS format. CSS should contain variable definitions like --primary: #color')

        return
      }

      onImport(cssText)
      setCssText('')
      setError(null)
      onOpenChange(false)
    } catch (err) {
      setError('Failed to parse CSS. Please check your syntax.')
    }
  }

  const handleClose = () => {
    setCssText('')
    setError(null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle className='text-foreground'>Import Custom CSS</DialogTitle>
          <DialogDescription>
            Paste your CSS file below to customize the theme colors. Make sure to include variables like --primary,
            --background, etc.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <Alert variant='destructive' className='mb-4'>
            <AlertCircle className='mr-2 h-4 w-4' />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className='grid gap-4 py-4'>
          <Textarea
            placeholder={`:root {
  --background: 0 0% 100%;
  --foreground: oklch(0.52 0.13 144.17);
  --primary: #3e2723;
  /* And more */
}
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: hsl(37.50 36.36% 95.69%);
  --primary: rgb(46, 125, 50);
  /* And more */
}
  `}
            className='text-foreground max-h-[500px] min-h-[300px] font-mono text-sm'
            value={cssText}
            onChange={e => {
              setCssText(e.target.value)
              if (error) setError(null)
            }}
          />
        </div>
        <DialogFooter>
          <Button variant='outline' onClick={handleClose} className='text-foreground cursor-pointer'>
            Cancel
          </Button>
          <Button onClick={handleImport} className='cursor-pointer'>
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CssImportDialog
