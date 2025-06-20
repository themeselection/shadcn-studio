'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarVariableSizeDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]'
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Variable size calendar
      </p>
    </div>
  )
}

export default CalendarVariableSizeDemo
