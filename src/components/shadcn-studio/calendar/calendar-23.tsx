'use client'

import { useState } from 'react'

import {
  endOfMonth,
  endOfYear,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
  addDays,
  addMonths
} from 'date-fns'
import type { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const CalendarWithRangePresetsDemo = () => {
  const today = new Date()

  const yesterday = {
    from: subDays(today, 1),
    to: subDays(today, 1)
  }

  const tomorrow = {
    from: today,
    to: addDays(today, 1)
  }

  const last7Days = {
    from: subDays(today, 6),
    to: today
  }

  const next7Days = {
    from: addDays(today, 1),
    to: addDays(today, 7)
  }

  const last30Days = {
    from: subDays(today, 29),
    to: today
  }

  const monthToDate = {
    from: startOfMonth(today),
    to: today
  }

  const lastMonth = {
    from: startOfMonth(subMonths(today, 1)),
    to: endOfMonth(subMonths(today, 1))
  }

  const nextMonth = {
    from: startOfMonth(addMonths(today, 1)),
    to: endOfMonth(addMonths(today, 1))
  }

  const yearToDate = {
    from: startOfYear(today),
    to: today
  }

  const lastYear = {
    from: startOfYear(subYears(today, 1)),
    to: endOfYear(subYears(today, 1))
  }

  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<DateRange | undefined>(last7Days)

  return (
    <div>
      <Card className='max-w-xs py-4'>
        <CardContent className='px-4'>
          <Calendar
            mode='range'
            selected={date}
            onSelect={newDate => {
              if (newDate) {
                setDate(newDate)
              }
            }}
            month={month}
            onMonthChange={setMonth}
            className='w-full bg-transparent p-0'
          />
        </CardContent>
        <CardFooter className='flex flex-wrap gap-2 border-t px-4 !pt-4'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate({
                from: today,
                to: today
              })
              setMonth(today)
            }}
          >
            Today
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(yesterday)
              setMonth(yesterday.to)
            }}
          >
            Yesterday
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(tomorrow)
              setMonth(tomorrow.to)
            }}
          >
            Tomorrow
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(last7Days)
              setMonth(last7Days.to)
            }}
          >
            Last 7 days
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(next7Days)
              setMonth(next7Days.to)
            }}
          >
            Next 7 days
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(last30Days)
              setMonth(last30Days.to)
            }}
          >
            Last 30 days
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(monthToDate)
              setMonth(monthToDate.to)
            }}
          >
            Month to date
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(lastMonth)
              setMonth(lastMonth.to)
            }}
          >
            Last month
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(nextMonth)
              setMonth(nextMonth.to)
            }}
          >
            Next month
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(yearToDate)
              setMonth(yearToDate.to)
            }}
          >
            Year to date
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => {
              setDate(lastYear)
              setMonth(lastYear.to)
            }}
          >
            Last year
          </Button>
        </CardFooter>
      </Card>
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Range calendar with presets
      </p>
    </div>
  )
}

export default CalendarWithRangePresetsDemo
