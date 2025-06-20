'use client'

import { useState } from 'react'

import { formatDateRange } from 'little-date'
import { ChevronDownIcon } from 'lucide-react'
import { type DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const DatePickerWithShortDateDisplayDemo = () => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2025, 10, 20),
    to: new Date(2025, 10, 24)
  })

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor='dates' className='px-1'>
        Date picker with short date
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' id='dates' className='w-full justify-between font-normal'>
            {range?.from && range?.to
              ? formatDateRange(range.from, range.to, {
                  includeTime: false
                })
              : 'Pick a date'}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
          <Calendar
            mode='range'
            selected={range}
            onSelect={range => {
              setRange(range)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePickerWithShortDateDisplayDemo
