import { Clock8Icon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const TimePickerWithIconDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor='timepicker'>Time input with start icon</Label>
      <div className='relative'>
        <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
          <Clock8Icon className='size-4' />
          <span className='sr-only'>User</span>
        </div>
        <Input
          type='time'
          id='time-picker'
          step='1'
          defaultValue='08:30:00'
          className='peer bg-background appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
        />
      </div>
    </div>
  )
}

export default TimePickerWithIconDemo
