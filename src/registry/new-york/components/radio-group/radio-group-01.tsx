import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupDemo = () => {
  return (
    <RadioGroup defaultValue='higher-secondary'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='higher-secondary' id='higher-secondary' />
        <Label htmlFor='higher-secondary'>Higher Secondary</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='graduation' id='graduation' />
        <Label htmlFor='graduation'>Graduation</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='post-graduation' id='post-graduation' />
        <Label htmlFor='post-graduation'>Post Graduation</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDemo
