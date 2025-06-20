import { Switch } from '@/components/ui/switch'

const SwitchSizesDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch aria-label='Small switch' />
      <Switch
        aria-label='Medium switch'
        className='h-6 w-10 [&_span]:size-5 data-[state=checked]:[&_span]:translate-x-4.5 data-[state=checked]:[&_span]:rtl:-translate-x-4.5'
      />
      <Switch
        aria-label='Large switch'
        className='h-7 w-12 [&_span]:size-6 data-[state=checked]:[&_span]:translate-x-5.5 data-[state=checked]:[&_span]:rtl:-translate-x-5.5'
      />
    </div>
  )
}

export default SwitchSizesDemo
