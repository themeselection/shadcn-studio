import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupDescriptionDemo = () => {
  return (
    <RadioGroup defaultValue='basic'>
      <div className='flex gap-2'>
        <RadioGroupItem value='basic' id='plan-basic' />
        <div className='grid flex-1 space-y-2'>
          <Label htmlFor='plan-basic'>Basic Plan</Label>
          <p className='text-muted-foreground text-xs'>Perfect for individuals just getting started</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <RadioGroupItem value='pro' id='plan-pro' />
        <div className='grid flex-1 space-y-2'>
          <Label htmlFor='plan-pro'>Pro Plan</Label>
          <p className='text-muted-foreground text-xs'>Advanced features for power users and small teams</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <RadioGroupItem value='enterprise' id='plan-enterprise' />
        <div className='grid flex-1 space-y-2'>
          <Label htmlFor='plan-enterprise'>Enterprise Plan</Label>
          <p className='text-muted-foreground text-xs'>Custom solutions for large organizations</p>
        </div>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDescriptionDemo
