import { Switch } from '@/components/ui/switch'

const SwitchGradientDemo = () => {
  return (
    <Switch
      aria-label='Destructive Switch'
      className='focus-visible:border-destructive to-destructive/60 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 h-6 w-10 border-none bg-gradient-to-r from-amber-500 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 [&_span]:size-5 [&_span]:!translate-x-0.25 data-[state=checked]:[&_span]:!translate-x-4.75 data-[state=checked]:[&_span]:rtl:!-translate-x-4.75'
    />
  )
}

export default SwitchGradientDemo
