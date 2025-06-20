import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const RadioGroupHorizontalDemo = () => {
  return (
    <RadioGroup defaultValue='beginner' className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='beginner' id='beginner' />
        <Label htmlFor='beginner'>Beginner</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='intermediate' id='intermediate' />
        <Label htmlFor='intermediate'>Intermediate</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='advanced' id='advanced' />
        <Label htmlFor='advanced'>Advanced</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupHorizontalDemo
