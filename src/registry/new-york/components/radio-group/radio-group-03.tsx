import { Label } from '@/registry/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york/ui/radio-group'

const RadioGroupColorsDemo = () => {
  return (
    <RadioGroup defaultValue='destructive' className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='destructive'
          id='color-destructive'
          className='border-destructive text-destructive [&_svg]:fill-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive dark:focus-visible:ring-destructive/40'
        />
        <Label htmlFor='color-destructive'>Destructive</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='success'
          id='color-success'
          className='border-green-600 text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-green-400 dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400'
        />
        <Label htmlFor='color-success'>Success</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem
          value='info'
          id='color-info'
          className='border-sky-600 text-sky-600 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400 dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 [&_svg]:fill-sky-600 dark:[&_svg]:fill-sky-400'
        />
        <Label htmlFor='color-info'>Info</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupColorsDemo
