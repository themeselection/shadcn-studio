'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarMultiMonthDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode='single'
        defaultMonth={date}
        numberOfMonths={2}
        selected={date}
        onSelect={setDate}
        className='rounded-lg border'
      />
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Multi month calendar
      </p>
    </div>
  )
}

export default CalendarMultiMonthDemo
