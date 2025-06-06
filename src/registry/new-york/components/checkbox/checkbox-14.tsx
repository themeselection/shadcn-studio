import { ChartPieIcon, CodeIcon, PaletteIcon } from 'lucide-react'

import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const skills = [
  { label: 'Web Development', icon: CodeIcon },
  { label: 'Data Analysis', icon: ChartPieIcon },
  { label: 'Graphic Design', icon: PaletteIcon }
]

const CheckboxListGroupDemo = () => {
  return (
    <ul className='flex w-full flex-col divide-y rounded-md border'>
      {skills.map(({ label, icon: Icon }) => (
        <li key={label} className='flex items-center justify-between gap-2 px-5 py-3'>
          <Label htmlFor={label}>
            <Icon className='size-4' /> {label}
          </Label>
          <Checkbox id={label} />
        </li>
      ))}
    </ul>
  )
}

export default CheckboxListGroupDemo
