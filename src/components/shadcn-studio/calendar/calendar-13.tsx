'use client'

import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

const CalendarCustomSelectDayDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
        classNames={{
          day_button:
            'rounded-full! data-[selected-single=true]:bg-sky-600! data-[selected-single=true]:text-white! data-[selected-single=true]:dark:bg-sky-400! data-[selected-single=true]:group-data-[focused=true]/day:ring-sky-600/20 data-[selected-single=true]:dark:group-data-[focused=true]/day:ring-sky-400/40',
          today: 'rounded-full! bg-accent!'
        }}
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Custom day select calendar
      </p>
    </div>
  )
}

export default CalendarCustomSelectDayDemo
