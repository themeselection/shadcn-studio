'use client'

import { useState } from 'react'

import { Badge } from '@/registry/new-york/ui/badge'
import { Checkbox } from '@/registry/new-york/ui/checkbox'

const snacks = ['Burger', 'Pizza', 'Drinks']

const CheckboxBadgeDemo = () => {
  const [selected, setSelected] = useState<string[]>(['Burger', 'Pizza'])

  return (
    <div className='flex items-center gap-2'>
      {snacks.map(label => (
        <Badge key={label} variant='secondary' className='relative gap-2 px-3 py-1.5'>
          <Checkbox
            id={label}
            checked={selected.includes(label)}
            onCheckedChange={checked =>
              setSelected(checked ? [...selected, label] : selected.filter(item => item !== label))
            }
            className='data-[state=unchecked]:hidden'
          />
          <label htmlFor={label} className='cursor-pointer select-none after:absolute after:inset-0'>
            {label}
          </label>
        </Badge>
      ))}
    </div>
  )
}

export default CheckboxBadgeDemo
