import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupSizesDemo = () => {
  return (
    <RadioGroup defaultValue='default' className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='default' id='size-default' />
        <Label htmlFor='size-default'>Default</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='medium' id='size-medium' className='size-5 [&_svg]:size-3' />
        <Label htmlFor='size-medium'>Medium</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='large' id='size-large' className='size-6 [&_svg]:size-3.5' />
        <Label htmlFor='size-large'>Large</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupSizesDemo
