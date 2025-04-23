'use client'

import { useState, useId } from 'react'

import { CheckCircleIcon } from 'lucide-react'

import { Badge } from '@/registry/new-york/ui/badge'
import { Checkbox } from '@/registry/new-york/ui/checkbox'

const BadgeSelectableDemo = () => {
  const [selected, setSelected] = useState(false)

  const id = useId()

  return (
    <Badge
      variant={selected ? 'secondary' : 'outline'}
      className='has-focus-visible:border-ring/50 has-focus-visible:ring-ring/50 relative cursor-pointer outline-none has-focus-visible:ring-2'
    >
      <Checkbox
        id={id}
        className='peer sr-only after:absolute after:inset-0'
        checked={selected}
        onCheckedChange={checked => setSelected(!!checked)}
      />
      <CheckCircleIcon
        className='hidden size-3 text-green-600 peer-data-[state=checked]:block dark:text-green-400'
        aria-hidden='true'
      />
      <label htmlFor={id} className='cursor-pointer select-none after:absolute after:inset-0'>
        {selected ? 'Selected' : 'Selectable'}
      </label>
    </Badge>
  )
}

export default BadgeSelectableDemo
