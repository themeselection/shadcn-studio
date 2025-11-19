'use client'

import { useEffect, useId, useState } from 'react'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CalendarWithDateInput = () => {
  const id = useId()
  const today = new Date()
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<Date | undefined>(today)
  const [inputValue, setInputValue] = useState('')

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue('')
      setDate(undefined)
    } else {
      setDate(date)
      setMonth(date)
      setInputValue(format(date, 'yyyy-MM-dd'))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setInputValue(value)

    if (value) {
      const parsedDate = new Date(value)

      setDate(parsedDate)
      setMonth(parsedDate)
    } else {
      setDate(undefined)
    }
  }

  useEffect(() => {
    setInputValue(format(today, 'yyyy-MM-dd'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Card className='gap-5 py-5'>
        <CardHeader className='flex items-center border-b px-3 !pb-3'>
          <Label htmlFor={id} className='shrink-0 text-xs'>
            Enter date
          </Label>
          <div className='relative grow'>
            <Input
              id={id}
              type='date'
              value={inputValue}
              onChange={handleInputChange}
              className='peer appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
              aria-label='Select date'
            />
            <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
              <CalendarIcon size={16} aria-hidden='true' />
            </div>
          </div>
        </CardHeader>
        <CardContent className='px-5'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={handleDayPickerSelect}
            month={month}
            onMonthChange={setMonth}
            className='bg-transparent p-0'
          />
        </CardContent>
      </Card>
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with date input
      </p>
    </div>
  )
}

export default CalendarWithDateInput
