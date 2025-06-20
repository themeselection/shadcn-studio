import { ChartPieIcon, CodeIcon, PaletteIcon } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const skills = [
  { label: 'Web Development', icon: CodeIcon },
  { label: 'Data Analysis', icon: ChartPieIcon },
  { label: 'Graphic Design', icon: PaletteIcon }
]

const CheckboxListGroupDemo = () => {
  return (
    <ul className='flex w-full flex-col divide-y rounded-md border'>
      {skills.map(({ label, icon: Icon }) => (
        <li key={label}>
          <Label htmlFor={label} className='flex items-center justify-between gap-2 px-5 py-3'>
            <span className='flex items-center gap-2'>
              <Icon className='size-4' /> {label}
            </span>
            <Checkbox id={label} />
          </Label>
        </li>
      ))}
    </ul>
  )
}

export default CheckboxListGroupDemo
