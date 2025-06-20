import { Switch } from '@/components/ui/switch'

const SwitchOutlineDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch
        className='focus-visible:border-primary data-[state=checked]:[&_span]:bg-primary dark:data-[state=checked]:[&_span]:bg-primary data-[state=checked]:border-primary data-[state=checked]:[&_span]:border-background data-[state=checked]:bg-transparent [&_span]:border'
        aria-label='Default outline Switch'
        defaultChecked
      />
      <Switch
        className='focus-visible:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 data-[state=checked]:[&_span]:bg-destructive dark:data-[state=checked]:[&_span]:bg-destructive data-[state=checked]:border-destructive data-[state=checked]:[&_span]:border-background data-[state=checked]:bg-transparent [&_span]:border'
        aria-label='Destructive Switch'
        defaultChecked
      />
      <Switch
        className='data-[state=checked]:[&_span]:border-background focus-visible:border-green-600 focus-visible:ring-green-600/20 data-[state=checked]:border-green-600 data-[state=checked]:bg-transparent dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 dark:data-[state=checked]:border-green-400 [&_span]:border data-[state=checked]:[&_span]:bg-green-600 dark:data-[state=checked]:[&_span]:bg-green-400'
        aria-label='Success outline Switch'
        defaultChecked
      />
      <Switch
        className='data-[state=checked]:[&_span]:border-background focus-visible:border-sky-600 focus-visible:ring-sky-600/20 data-[state=checked]:border-sky-600 data-[state=checked]:bg-transparent dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 dark:data-[state=checked]:border-sky-400 [&_span]:border data-[state=checked]:[&_span]:bg-sky-600 dark:data-[state=checked]:[&_span]:bg-sky-400'
        aria-label='Info outline Switch'
        defaultChecked
      />
      <Switch
        className='data-[state=checked]:[&_span]:border-background focus-visible:border-amber-600 focus-visible:ring-amber-600/20 data-[state=checked]:border-amber-600 data-[state=checked]:bg-transparent dark:focus-visible:border-amber-400 dark:focus-visible:ring-amber-400/40 dark:data-[state=checked]:border-amber-400 [&_span]:border data-[state=checked]:[&_span]:bg-amber-600 dark:data-[state=checked]:[&_span]:bg-amber-400'
        aria-label='Warning outline Switch'
        defaultChecked
      />
    </div>
  )
}

export default SwitchOutlineDemo
