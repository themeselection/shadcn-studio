import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/motion-switch'

const SwitchAnimatedGradientDemo = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center space-x-2'>
        <Switch
          aria-label='Animated gradient small switch'
          size='sm'
          id='small-gradient-switch'
          className='focus-visible:border-destructive to-destructive/60 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 border-none bg-gradient-to-r from-amber-500 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 [&_span]:size-5 [&_span]:!translate-x-0.25'
        />
        <Label htmlFor='small-gradient-switch'>Small switch</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch
          aria-label='Animated gradient medium switch'
          id='medium-gradient-switch'
          className='focus-visible:border-destructive to-destructive/60 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 border-none bg-gradient-to-r from-amber-500 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 [&_span]:size-5 [&_span]:!translate-x-0.25'
        />
        <Label htmlFor='medium-gradient-switch'>Medium switch</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch
          aria-label='Animated gradient large switch'
          size='lg'
          id='large-gradient-switch'
          className='focus-visible:border-destructive to-destructive/60 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 border-none bg-gradient-to-r from-amber-500 data-[state=checked]:from-sky-400 data-[state=checked]:to-indigo-700 [&_span]:size-5 [&_span]:!translate-x-0.25'
        />
        <Label htmlFor='large-gradient-switch'>Large switch</Label>
      </div>
    </div>
  )
}

export default SwitchAnimatedGradientDemo
