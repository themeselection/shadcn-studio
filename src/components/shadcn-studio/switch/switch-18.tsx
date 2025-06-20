import { ChartPieIcon, CodeIcon, PaletteIcon } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const skills = [
  { label: 'Web Development', icon: CodeIcon },
  { label: 'Data Analysis', icon: ChartPieIcon },
  { label: 'Graphic Design', icon: PaletteIcon }
]

const SwitchListGroupDemo = () => {
  return (
    <fieldset className='w-full max-w-96 space-y-4'>
      <legend className='text-foreground text-sm leading-none font-medium'>Switch to your preferred field: </legend>
      <ul className='flex w-full flex-col divide-y rounded-md border'>
        {skills.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Label htmlFor={label} className='flex items-center justify-between gap-2 px-5 py-3'>
              <span className='flex items-center gap-2'>
                <Icon className='size-4' /> {label}
              </span>
              <Switch id={label} />
            </Label>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default SwitchListGroupDemo
