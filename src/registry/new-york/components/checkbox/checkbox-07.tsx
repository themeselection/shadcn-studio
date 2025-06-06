import { useId } from 'react'

import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const CheckboxDescriptionDemo = () => {
  const id = useId()

  return (
    <div className='flex items-start gap-2'>
      <Checkbox id={id} defaultChecked />
      <div className='grid gap-2'>
        <Label htmlFor={id} className='leading-4'>
          Accept terms and conditions
        </Label>
        <p className='text-muted-foreground text-xs'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
  )
}

export default CheckboxDescriptionDemo
