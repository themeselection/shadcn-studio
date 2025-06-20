'use client'

import { useState } from 'react'

import { MoonIcon, SunIcon } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SwitchIconLabelDemo = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div className='inline-flex items-center gap-2'>
      <Switch id='icon-label' checked={checked} onCheckedChange={setChecked} aria-label='Toggle switch' />
      <Label htmlFor='icon-label'>
        <span className='sr-only'>Toggle switch</span>
        {checked ? (
          <MoonIcon className='size-4' aria-hidden='true' />
        ) : (
          <SunIcon className='size-4' aria-hidden='true' />
        )}
      </Label>
    </div>
  )
}

export default SwitchIconLabelDemo
