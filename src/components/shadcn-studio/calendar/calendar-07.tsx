'use client'

import { useState } from 'react'

import { type DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'

const CalendarDisabledWeekendsDemo = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 17),
    to: new Date(2025, 5, 20)
  })

  return (
    <div>
      <Calendar
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        disabled={{ dayOfWeek: [0, 6] }}
        className='rounded-lg border'
        excludeDisabled
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Disabled weekend calendar
      </p>
    </div>
  )
}

export default CalendarDisabledWeekendsDemo
