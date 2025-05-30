import { ChartAreaDemo } from '@/components/examples/v4/components/ChartAreaDemo'
import { ChartBarDemo } from '@/components/examples/v4/components/ChartBarDemo'
import { ChartLineDemo } from '@/components/examples/v4/components/ChartLineDemo'
import { ChartBarMixed } from '@/components/examples/v4/components/ChartBarMixed'

export function ChartDemo() {
  return (
    <div className='grid w-full max-w-screen-2xl gap-4 *:data-[slot=card]:flex-1 @2xl:grid-cols-2 @6xl:grid-cols-3'>
      <ChartAreaDemo />
      <ChartBarDemo />
      <ChartBarMixed />
      <div className='@6xl:hidden'>
        <ChartLineDemo />
      </div>
    </div>
  )
}
