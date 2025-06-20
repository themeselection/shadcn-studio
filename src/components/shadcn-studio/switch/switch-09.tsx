'use client'

import { useId, useState } from 'react'

import { Switch } from '@/components/ui/switch'

const SwitchDualToggleLabelDemo = () => {
  const id = useId()
  const [checked, setChecked] = useState(false)

  const toggleSwitch = () => setChecked(prev => !prev)

  return (
    <div className='group inline-flex items-center gap-2' data-state={checked ? 'checked' : 'unchecked'}>
      <span
        id={`${id}-yes`}
        className='group-data-[state=checked]:text-muted-foreground/70 cursor-pointer text-right text-sm font-medium'
        aria-controls={id}
        onClick={() => setChecked(false)}
      >
        Yes
      </span>
      <Switch id={id} checked={checked} onCheckedChange={toggleSwitch} aria-labelledby={`${id}-yes ${id}-no`} />
      <span
        id={`${id}-no`}
        className='group-data-[state=unchecked]:text-muted-foreground/70 cursor-pointer text-left text-sm font-medium'
        aria-controls={id}
        onClick={() => setChecked(true)}
      >
        No
      </span>
    </div>
  )
}

export default SwitchDualToggleLabelDemo
