import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupDashedDemo = () => {
  return (
    <RadioGroup defaultValue='standard'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='standard'
          id='standard'
          className='border-primary focus-visible:border-primary border-dashed'
        />
        <Label htmlFor='standard'>Standard Shipping</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='express'
          id='express'
          className='border-primary focus-visible:border-primary border-dashed'
        />
        <Label htmlFor='express'>Express Delivery</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='overnight'
          id='overnight'
          className='border-primary focus-visible:border-primary border-dashed'
        />
        <Label htmlFor='overnight'>Overnight Shipping</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDashedDemo
