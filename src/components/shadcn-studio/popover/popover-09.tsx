'use client'

import { useState } from 'react'

import { FunnelPlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'

const filters = ['Most liked', 'Highest reviewed', 'Newest', 'Most popular']

const PopoverFilterDemo = () => {
  const [selected, setSelected] = useState(['Most liked', 'Newest'])
  const [price, setPrice] = useState([450])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon'>
          <FunnelPlusIcon />
          <span className='sr-only'>Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='grid gap-4'>
          <div className='flex items-center justify-between gap-2'>
            <span className='font-medium'>Filter</span>
            <Button
              variant='secondary'
              className='h-7 rounded-full px-2 py-1 text-xs'
              onClick={() => {
                setSelected(['Most liked', 'Newest'])
                setPrice([450])
              }}
            >
              Reset all
            </Button>
          </div>
          <div className='flex flex-col gap-2'>
            {filters.map((label, index) => (
              <div key={index} className='flex items-center gap-2'>
                <Checkbox
                  id={`filter-${index + 1}`}
                  checked={selected.includes(label)}
                  onCheckedChange={checked =>
                    setSelected(checked ? [...selected, label] : selected.filter(item => item !== label))
                  }
                />
                <Label htmlFor={`filter-${index + 1}`}>{label}</Label>
              </div>
            ))}
          </div>
          <div className='grid gap-3'>
            <Label>Price range</Label>
            <div className='space-y-2'>
              <Slider value={price} onValueChange={setPrice} step={50} max={1000} aria-label='Price range' />
              <span className='text-muted-foreground flex w-full items-center justify-between gap-1 text-xs font-medium'>
                <span>0</span>
                <span>500</span>
                <span>1000</span>
              </span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverFilterDemo
