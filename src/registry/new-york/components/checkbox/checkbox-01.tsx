import { useId } from 'react'

import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const CheckboxDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} />
      <Label htmlFor={id}>Accept terms and conditions</Label>
    </div>
  )
}

export default CheckboxDemo
