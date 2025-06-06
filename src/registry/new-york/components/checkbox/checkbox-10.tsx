import { Checkbox } from '@/registry/new-york/ui/checkbox'

const CheckboxColorsDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        className='data-[state=checked]:bg-destructive! data-[state=checked]:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:text-white'
        aria-label='Color destructive'
        defaultChecked
      />
      <Checkbox
        className='focus-visible:ring-sky-600/20 data-[state=checked]:border-sky-600 data-[state=checked]:bg-sky-600 dark:text-white dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:border-sky-400 dark:data-[state=checked]:bg-sky-400'
        aria-label='Color info'
        defaultChecked
      />
      <Checkbox
        className='focus-visible:ring-green-600/20 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 dark:text-white dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:border-green-400 dark:data-[state=checked]:bg-green-400'
        aria-label='Color success'
        defaultChecked
      />
    </div>
  )
}

export default CheckboxColorsDemo
