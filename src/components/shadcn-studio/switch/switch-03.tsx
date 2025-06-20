import { Switch } from '@/components/ui/switch'

const SwitchMiniDemo = () => {
  return (
    <Switch
      aria-label='Mini switch'
      className='[&_span]:border-input h-3 border-none [&_span]:size-4.5 [&_span]:border'
    />
  )
}

export default SwitchMiniDemo
