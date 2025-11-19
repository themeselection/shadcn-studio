'use client'

import {
  BadgePercentIcon,
  ChartNoAxesCombinedIcon,
  CirclePercentIcon,
  DollarSignIcon,
  ShoppingBagIcon,
  TrendingUpIcon
} from 'lucide-react'

import { Bar, BarChart, Label, Pie, PieChart } from 'recharts'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const salesPlanPercentage = 54
const totalBars = 24
const filledBars = Math.round((salesPlanPercentage * totalBars) / 100)

// Sales chart data
const salesChartData = Array.from({ length: totalBars }, (_, index) => {
  const date = new Date(2025, 5, 15)

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return {
    date: formattedDate,
    sales: index < filledBars ? 315 : 0
  }
})

const salesChartConfig = {
  sales: {
    label: 'Sales'
  }
} satisfies ChartConfig

const MetricsData = [
  {
    icons: <TrendingUpIcon className='size-5' />,
    title: 'Sales trend',
    value: '$11,548'
  },
  {
    icons: <BadgePercentIcon className='size-5' />,
    title: 'Discount offers',
    value: '$1,326'
  },
  {
    icons: <DollarSignIcon className='size-5' />,
    title: 'Net profit',
    value: '$17,356'
  },
  {
    icons: <ShoppingBagIcon className='size-5' />,
    title: 'Total orders',
    value: '248'
  }
]

const revenueChartData = [
  { month: 'january', sales: 340, fill: 'var(--color-january)' },
  { month: 'february', sales: 200, fill: 'var(--color-february)' },
  { month: 'march', sales: 200, fill: 'var(--color-march)' }
]

const revenueChartConfig = {
  sales: {
    label: 'Sales'
  },
  january: {
    label: 'January',
    color: 'var(--primary)'
  },
  february: {
    label: 'February',
    color: 'color-mix(in oklab, var(--primary) 60%, transparent)'
  },
  march: {
    label: 'March',
    color: 'color-mix(in oklab, var(--primary) 20%, transparent)'
  }
} satisfies ChartConfig

const SalesMetricsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardContent className='space-y-4'>
        <div className='grid gap-6 lg:grid-cols-5'>
          <div className='flex flex-col gap-7 lg:col-span-3'>
            <span className='text-lg font-semibold'>Sales metrics</span>
            <div className='flex items-center gap-3'>
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/logo/logo-square.png'
                className='size-10.5 rounded-lg'
                alt='logo'
              />
              <div className='flex flex-col gap-0.5'>
                <span className='text-xl font-medium'>Sandy&apos; Company</span>
                <span className='text-muted-foreground text-sm'>sandy@company.com</span>
              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {MetricsData.map((metric, index) => (
                <div key={index} className='flex items-center gap-3 rounded-md border px-4 py-2'>
                  <Avatar className='size-8.5 rounded-sm'>
                    <AvatarFallback className='bg-primary/10 text-primary shrink-0 rounded-sm'>
                      {metric.icons}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-muted-foreground text-sm font-medium'>{metric.title}</span>
                    <span className='text-lg font-medium'>{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className='gap-4 py-4 shadow-none lg:col-span-2'>
            <CardHeader className='gap-1'>
              <CardTitle className='text-lg font-semibold'>Revenue goal</CardTitle>
            </CardHeader>

            <CardContent className='px-0'>
              <ChartContainer config={revenueChartConfig} className='h-38.5 w-full'>
                <PieChart margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={revenueChartData}
                    dataKey='sales'
                    nameKey='month'
                    startAngle={300}
                    endAngle={660}
                    innerRadius={58}
                    outerRadius={75}
                    paddingAngle={2}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 12}
                                className='fill-card-foreground text-lg font-medium'
                              >
                                256.24
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 19}
                                className='fill-muted-foreground text-sm'
                              >
                                Total Profit
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>

            <CardFooter className='justify-between'>
              <span className='text-xl'>Plan completed</span>
              <span className='text-2xl font-medium'>56%</span>
            </CardFooter>
          </Card>
        </div>
        <Card className='shadow-none'>
          <CardContent className='grid gap-4 px-4 lg:grid-cols-5'>
            <div className='flex flex-col justify-center gap-6'>
              <span className='text-lg font-semibold'>Sales plan</span>
              <span className='max-lg:5xl text-6xl'>{salesPlanPercentage}%</span>
              <span className='text-muted-foreground text-sm'>Percentage profit from total sales</span>
            </div>
            <div className='flex flex-col gap-6 text-lg md:col-span-4'>
              <span className='font-medium'>Cohort analysis indicators</span>
              <span className='text-muted-foreground text-wrap'>
                Analyzes the behaviour of a group of users who joined a product/service at the same time. over a certain
                period.
              </span>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='flex items-center gap-2'>
                  <ChartNoAxesCombinedIcon className='size-6' />
                  <span className='text-lg font-medium'>Open Statistics</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CirclePercentIcon className='size-6' />
                  <span className='text-lg font-medium'>Percentage Change</span>
                </div>
              </div>

              <ChartContainer config={salesChartConfig} className='h-7.75 w-full'>
                <BarChart
                  accessibilityLayer
                  data={salesChartData}
                  margin={{
                    left: 0,
                    right: 0
                  }}
                  maxBarSize={16}
                >
                  <Bar
                    dataKey='sales'
                    fill='var(--primary)'
                    background={{ fill: 'color-mix(in oklab, var(--primary) 10%, transparent)', radius: 12 }}
                    radius={12}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

export default SalesMetricsCard
