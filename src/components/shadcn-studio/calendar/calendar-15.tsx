'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarRightYearMonthDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        defaultMonth={date}
        onSelect={setDate}
        className='rounded-md border'
        classNames={{
          month_caption: 'flex items-center h-8 justify-start',
          nav: 'flex justify-end absolute w-full items-center'
        }}
      />
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Right side month year navigation calendar
      </p>
    </div>
  )
}

export default CalendarRightYearMonthDemo
