'use client'

import { useState } from 'react'

import { type DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'

const CalendarRangeSingleMonthDemo = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 4),
    to: new Date(2025, 5, 17)
  })

  return (
    <div>
      <Calendar
        mode='range'
        selected={dateRange}
        defaultMonth={dateRange?.from}
        onSelect={setDateRange}
        className='rounded-lg border'
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Single month calendar with range selection
      </p>
    </div>
  )
}

export default CalendarRangeSingleMonthDemo
