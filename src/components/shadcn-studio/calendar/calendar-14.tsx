'use client'

import { useState } from 'react'

import { type DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'

const CalendarCustomRangeSelectDemo = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 4),
    to: new Date(2025, 5, 17)
  })

  return (
    <div>
      <Calendar
        mode='range'
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        className='rounded-md border'
        classNames={{
          range_start: 'bg-sky-600/20 dark:bg-sky-400/10 rounded-l-full',
          range_end: 'bg-sky-600/20 dark:bg-sky-400/10 rounded-r-full',
          day_button:
            'data-[range-end=true]:rounded-full! data-[range-start=true]:rounded-full! data-[range-start=true]:bg-sky-600! data-[range-start=true]:text-white! data-[range-start=true]:dark:bg-sky-400! data-[range-start=true]:group-data-[focused=true]/day:ring-sky-600/20 data-[range-start=true]:dark:group-data-[focused=true]/day:ring-sky-400/40 data-[range-end=true]:bg-sky-600! data-[range-end=true]:text-white! data-[range-end=true]:dark:bg-sky-400! data-[range-end=true]:group-data-[focused=true]/day:ring-sky-600/20 data-[range-end=true]:dark:group-data-[focused=true]/day:ring-sky-400/40 data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-sky-600/20 data-[range-middle=true]:dark:bg-sky-400/10 hover:rounded-full',
          today:
            'data-[selected=true]:rounded-l-none! rounded-full bg-accent! data-[selected=true]:bg-sky-600/20! dark:data-[selected=true]:bg-sky-400/10! [&_button[data-range-middle=true]]:bg-transparent!'
        }}
      />
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Custom range selection calendar
      </p>
    </div>
  )
}

export default CalendarCustomRangeSelectDemo
