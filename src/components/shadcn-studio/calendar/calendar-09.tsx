'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarWithMonthYearDropdownDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
        captionLayout='dropdown'
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Month and year dropdown calendar
      </p>
    </div>
  )
}

export default CalendarWithMonthYearDropdownDemo
