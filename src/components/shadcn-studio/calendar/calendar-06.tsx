'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarDisableDayDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 18))

  return (
    <div>
      <Calendar
        mode='single'
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        disabled={{
          before: new Date(2025, 5, 12)
        }}
        className='rounded-lg border'
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Disabled day calendar
      </p>
    </div>
  )
}

export default CalendarDisableDayDemo
