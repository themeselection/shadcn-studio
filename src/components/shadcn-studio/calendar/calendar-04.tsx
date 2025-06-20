'use client'

import { useState } from 'react'

import { type DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'

const CalendarRangeCalendarMultiMonthDemo = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 4, 22),
    to: new Date(2025, 5, 17)
  })

  return (
    <div>
      <Calendar
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className='rounded-lg border'
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Multi month calendar with range selection
      </p>
    </div>
  )
}

export default CalendarRangeCalendarMultiMonthDemo
