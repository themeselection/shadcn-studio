'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarMultiSelectDemo = () => {
  const [dates, setDates] = useState<Date[]>([new Date(2025, 5, 12), new Date(2025, 5, 17)])

  return (
    <div>
      <Calendar mode='multiple' required selected={dates} onSelect={setDates} max={5} className='rounded-lg border' />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Multi day select calendar
      </p>
    </div>
  )
}

export default CalendarMultiSelectDemo
