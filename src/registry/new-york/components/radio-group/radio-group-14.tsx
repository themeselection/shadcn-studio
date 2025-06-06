import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/motion-radio-group'

const RadioGroupAnimatedDemo = () => {
  return (
    <RadioGroup defaultValue='realtime'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='realtime' id='notifications-realtime' />
        <Label htmlFor='notifications-realtime'>Real-time</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='daily' id='notifications-daily' />
        <Label htmlFor='notifications-daily'>Daily Digest</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='none' id='notifications-none' />
        <Label htmlFor='notifications-none'>No Notifications</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupAnimatedDemo
