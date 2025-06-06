import { useId } from 'react'

import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const CheckboxTodoListDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id} className='peer-data-[state=checked]:line-through'>
        Simple todo list item
      </Label>
    </div>
  )
}

export default CheckboxTodoListDemo
