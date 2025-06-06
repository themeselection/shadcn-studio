import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupSolidDemo = () => {
  return (
    <RadioGroup defaultValue='light'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='light'
          id='theme-light'
          className='text-primary-foreground data-[state=checked]:bg-primary! data-[state=checked]:border-primary data-[state=checked]:[&_svg]:fill-primary-foreground'
        />
        <Label htmlFor='theme-light'>Light Theme</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='dark'
          id='theme-dark'
          className='text-primary-foreground data-[state=checked]:bg-primary! data-[state=checked]:border-primary data-[state=checked]:[&_svg]:fill-primary-foreground'
        />
        <Label htmlFor='theme-dark'>Dark Theme</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='system'
          id='theme-system'
          className='text-primary-foreground data-[state=checked]:bg-primary! data-[state=checked]:border-primary data-[state=checked]:[&_svg]:fill-primary-foreground'
        />
        <Label htmlFor='theme-system'>System Default</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupSolidDemo
