import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SwitchCardDemo = () => {
  const id = useId()

  return (
    <div className='border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none'>
      <Switch
        id={id}
        className='order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2.5 data-[state=checked]:[&_span]:rtl:-translate-x-2.5'
        aria-describedby={`${id}-description`}
      />
      <div className='flex grow items-center gap-3'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto'
          alt='GitHub Icon'
          className='size-5'
        />
        <div className='grid grow gap-2'>
          <Label htmlFor={id}>Connect with GitHub</Label>
          <p id={`${id}-description`} className='text-muted-foreground text-xs'>
            Access your projects direct from GitHub.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SwitchCardDemo
