import { useId } from 'react'

import { Button } from '@/registry/new-york/ui/button'
import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const CheckboxFormDemo = () => {
  const id = useId()

  return (
    <div className='flex items-start gap-2'>
      <Checkbox id={id} defaultChecked />
      <div className='grid gap-2'>
        <Label htmlFor={id} className='gap-1 leading-4'>
          Accept terms and conditions
        </Label>
        <p className='text-muted-foreground text-xs'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
        <div className='flex flex-wrap gap-2'>
          <Button variant='outline' size='sm'>
            Reset
          </Button>
          <Button size='sm'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default CheckboxFormDemo
