'use client'

import { useId, useState } from 'react'

import { ClockIcon } from 'lucide-react'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const CalendarWithTimeInput = () => {
  const id = useId()
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Card className='gap-5 py-5'>
        <CardHeader className='flex items-center border-b px-3 !pb-3'>
          <Label htmlFor={id} className='text-xs'>
            Enter time
          </Label>
          <div className='relative grow'>
            <Input
              id={id}
              type='time'
              step='1'
              defaultValue='12:00:00'
              className='peer appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
            />
            <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
              <ClockIcon size={16} aria-hidden='true' />
            </div>
          </div>
        </CardHeader>
        <CardContent className='px-5'>
          <Calendar mode='single' selected={date} onSelect={setDate} className='bg-transparent p-0' />
        </CardContent>
      </Card>
      <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
        Calendar with time input
      </p>
    </div>
  )
}

export default CalendarWithTimeInput
