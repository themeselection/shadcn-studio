'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarWeekNumberDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode='single'
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className='rounded-lg border shadow-sm'
        showWeekNumber
      />
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Week number calendar
      </p>
    </div>
  )
}

export default CalendarWeekNumberDemo
