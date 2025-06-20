import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/motion-switch'

const SwitchAnimatedDemo = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center space-x-2'>
        <Switch aria-label='Animated small switch' size='sm' id='small-switch' />
        <Label htmlFor='small-switch'>Small switch</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch aria-label='Animated medium switch' size='md' id='medium-switch' />
        <Label htmlFor='medium-switch'>Medium switch</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch aria-label='Animated large switch' size='lg' id='large-switch' />
        <Label htmlFor='large-switch'>Large switch</Label>
      </div>
    </div>
  )
}

export default SwitchAnimatedDemo
