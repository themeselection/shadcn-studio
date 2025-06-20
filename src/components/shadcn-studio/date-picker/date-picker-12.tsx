'use client'

import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const DatePickerRangeAndTimePickerDemo = () => {
  const [openFrom, setOpenFrom] = useState(false)
  const [openTo, setOpenTo] = useState(false)
  const [dateFrom, setDateFrom] = useState<Date | undefined>(new Date('2025-06-18'))
  const [dateTo, setDateTo] = useState<Date | undefined>(new Date('2025-06-25'))

  return (
    <div className='flex w-full max-w-64 min-w-0 flex-col gap-6'>
      <div className='flex gap-4'>
        <div className='flex flex-1 flex-col gap-3'>
          <Label htmlFor='date-from' className='px-1'>
            Departure date
          </Label>
          <Popover open={openFrom} onOpenChange={setOpenFrom}>
            <PopoverTrigger asChild>
              <Button variant='outline' id='date-from' className='w-full justify-between font-normal'>
                {dateFrom
                  ? dateFrom.toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })
                  : 'Pick a date'}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
              <Calendar
                mode='single'
                selected={dateFrom}
                onSelect={date => {
                  setDateFrom(date)
                  setOpenFrom(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='time-from' className='invisible px-1'>
            From
          </Label>
          <Input
            type='time'
            id='time-from'
            step='1'
            defaultValue='09:30:00'
            className='bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
          />
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-1 flex-col gap-3'>
          <Label htmlFor='date-to' className='px-1'>
            Return date
          </Label>
          <Popover open={openTo} onOpenChange={setOpenTo}>
            <PopoverTrigger asChild>
              <Button variant='outline' id='date-to' className='w-full justify-between font-normal'>
                {dateTo
                  ? dateTo.toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })
                  : 'Pick a date'}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
              <Calendar
                mode='single'
                selected={dateTo}
                captionLayout='dropdown'
                onSelect={date => {
                  setDateTo(date)
                  setOpenTo(false)
                }}
                disabled={dateFrom && { before: dateFrom }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='time-to' className='invisible px-1'>
            To
          </Label>
          <Input
            type='time'
            id='time-to'
            step='1'
            defaultValue='18:30:00'
            className='bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
          />
        </div>
      </div>
    </div>
  )
}

export default DatePickerRangeAndTimePickerDemo
