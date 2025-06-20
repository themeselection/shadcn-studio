'use client'

import { useState, useMemo } from 'react'

import { CalendarIcon } from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { ChartConfig } from '@/components/ui/chart'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const chartData = [
  { date: '2025-01-01', visitors: 178 },
  { date: '2025-01-02', visitors: 470 },
  { date: '2025-01-03', visitors: 103 },
  { date: '2025-01-04', visitors: 439 },
  { date: '2025-01-05', visitors: 88 },
  { date: '2025-01-06', visitors: 294 },
  { date: '2025-01-07', visitors: 323 },
  { date: '2025-01-08', visitors: 385 },
  { date: '2025-01-09', visitors: 438 },
  { date: '2025-01-10', visitors: 155 },
  { date: '2025-01-11', visitors: 92 },
  { date: '2025-01-12', visitors: 492 },
  { date: '2025-01-13', visitors: 81 },
  { date: '2025-01-14', visitors: 426 },
  { date: '2025-01-15', visitors: 307 },
  { date: '2025-01-16', visitors: 371 },
  { date: '2025-01-17', visitors: 475 },
  { date: '2025-01-18', visitors: 107 },
  { date: '2025-01-19', visitors: 341 },
  { date: '2025-01-20', visitors: 408 },
  { date: '2025-01-21', visitors: 169 },
  { date: '2025-01-22', visitors: 317 },
  { date: '2025-01-23', visitors: 480 },
  { date: '2025-01-24', visitors: 132 },
  { date: '2025-01-25', visitors: 141 },
  { date: '2025-01-26', visitors: 434 },
  { date: '2025-01-27', visitors: 448 },
  { date: '2025-01-28', visitors: 149 },
  { date: '2025-01-29', visitors: 103 },
  { date: '2025-01-30', visitors: 446 },
  { date: '2025-01-31', visitors: 320 }
]

const total = chartData.reduce((acc, curr) => acc + curr.visitors, 0)

const chartConfig = {
  visitors: {
    label: 'Visitors',
    color: 'var(--color-primary)'
  }
} satisfies ChartConfig

const ChartFilterDemo = () => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(2025, 0, 31)
  })

  const filteredData = useMemo(() => {
    if (!range?.from && !range?.to) {
      return chartData
    }

    return chartData.filter(item => {
      const date = new Date(item.date)

      return date >= range.from! && date <= range.to!
    })
  }, [range])

  return (
    <Card className='@container/card w-full max-w-xl'>
      <CardHeader className='flex flex-col border-b @md/card:grid'>
        <CardTitle>Web Analytics</CardTitle>
        <CardDescription>Showing total visitors for this month.</CardDescription>
        <CardAction className='mt-2 @md/card:mt-0'>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline'>
                <CalendarIcon />
                {range?.from && range?.to
                  ? `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
                  : 'January 2025'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto overflow-hidden p-0' align='end'>
              <Calendar
                className='w-full'
                mode='range'
                defaultMonth={range?.from}
                selected={range}
                onSelect={setRange}
                startMonth={range?.from}
                fixedWeeks
                showOutsideDays
                disabled={{
                  after: new Date(2025, 0, 31),
                  before: new Date(2025, 0, 1)
                }}
              />
            </PopoverContent>
          </Popover>
        </CardAction>
      </CardHeader>
      <CardContent className='px-4'>
        <ChartContainer config={chartConfig} className='aspect-auto h-62 w-full'>
          <BarChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={20}
              tickFormatter={value => {
                const date = new Date(value)

                return date.toLocaleDateString('en-US', {
                  day: 'numeric'
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='visitors'
                  labelFormatter={value => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })
                  }}
                />
              }
            />
            <Bar dataKey='visitors' fill={`var(--color-visitors)`} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='border-t'>
        <div className='text-sm'>
          You had <span className='font-semibold'>{total.toLocaleString()}</span> visitors for the month of January.
        </div>
      </CardFooter>
    </Card>
  )
}

export default ChartFilterDemo
