import { Switch } from '@/components/ui/switch'

const SwitchColorsDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch
        className='focus-visible:border-destructive focus-visible:ring-destructive/20 data-[state=checked]:bg-destructive dark:focus-visible:ring-destructive/40'
        aria-label='Destructive Switch'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-ring-green-600 dark:focus-visible:border-ring-green-400 focus-visible:ring-green-600/20 data-[state=checked]:bg-green-600 dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:bg-green-400'
        aria-label='Success Switch'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-ring-sky-600 dark:focus-visible:border-ring-sky-400 focus-visible:ring-sky-600/20 data-[state=checked]:bg-sky-600 dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:bg-sky-400'
        aria-label='Info Switch'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-ring-amber-600 dark:focus-visible:border-ring-amber-400 focus-visible:ring-amber-600/20 data-[state=checked]:bg-amber-600 dark:focus-visible:ring-amber-400/40 dark:data-[state=checked]:bg-amber-400'
        aria-label='Warning Switch'
        defaultChecked
      />
    </div>
  )
}

export default SwitchColorsDemo
