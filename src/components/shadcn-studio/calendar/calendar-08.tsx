'use client'

import { useState } from 'react'

import { type DateRange } from 'react-day-picker'
import { enUS, hi } from 'react-day-picker/locale'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const localizedStrings = {
  en: {
    title: 'Book an appointment',
    description: 'Select the dates for your appointment'
  },
  hi: {
    title: 'अपॉइंटमेंट बुक करें',
    description: 'अपनी अपॉइंटमेंट के लिए तारीखें चुनें'
  }
} as const

export function CalendarLocalizationDemo() {
  const [locale, setLocale] = useState<keyof typeof localizedStrings>('en')

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 8, 9),
    to: new Date(2025, 8, 17)
  })

  return (
    <div>
      <Card className='w-2xs shadow-none'>
        <CardHeader className='border-b'>
          <CardTitle>{localizedStrings[locale].title}</CardTitle>
          <CardDescription>{localizedStrings[locale].description}</CardDescription>
          <CardAction>
            <Select value={locale} onValueChange={value => setLocale(value as keyof typeof localizedStrings)}>
              <SelectTrigger className='w-[100px]' aria-label='Select language'>
                <SelectValue placeholder='Language' />
              </SelectTrigger>
              <SelectContent align='end'>
                <SelectItem value='hi'>Hindi</SelectItem>
                <SelectItem value='en'>English</SelectItem>
              </SelectContent>
            </Select>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Calendar
            mode='range'
            selected={dateRange}
            onSelect={setDateRange}
            defaultMonth={dateRange?.from}
            locale={locale === 'hi' ? hi : enUS}
            numerals={locale === 'hi' ? 'deva' : 'latn'}
            className='w-full bg-transparent p-0'
            buttonVariant='outline'
          />
        </CardContent>
      </Card>
      <p className='text-muted-foreground mt-3 text-center text-xs' role='region'>
        Localize calendar
      </p>
    </div>
  )
}

export default CalendarLocalizationDemo
