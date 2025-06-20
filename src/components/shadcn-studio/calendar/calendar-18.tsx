'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const CalendarWithTodayMonthButtonDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 15))
  const [month, setMonth] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Book the show</CardTitle>
          <CardDescription>Find a date</CardDescription>
          <CardAction>
            <Button
              size='sm'
              variant='outline'
              onClick={() => {
                setMonth(new Date())
                setDate(new Date())
              }}
            >
              Today
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Calendar
            mode='single'
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={setDate}
            className='bg-transparent p-0'
          />
        </CardContent>
      </Card>
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with today button
      </p>
    </div>
  )
}

export default CalendarWithTodayMonthButtonDemo
