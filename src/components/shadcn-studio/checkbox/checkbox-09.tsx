import { AppleIcon, CherryIcon, GrapeIcon } from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const fruits = [
  { label: 'Apple', icon: AppleIcon },
  { label: 'Cherry', icon: CherryIcon },
  { label: 'Grape', icon: GrapeIcon }
]

const CheckboxVerticalGroupDemo = () => {
  return (
    <div className='space-y-4'>
      <Label className='font-semibold'>Favorite Fruits</Label>
      <div className='flex flex-col gap-4'>
        {fruits.map(({ label, icon: Icon }) => (
          <div key={label} className='flex items-center gap-2'>
            <Checkbox id={label} />
            <Label htmlFor={label}>
              <Icon className='size-4' aria-hidden='true' />
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxVerticalGroupDemo
