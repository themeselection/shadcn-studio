import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const SelectNativeMultipleDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Native multiple select</Label>
      <div className='border-input overflow-hidden rounded-md border'>
        <SelectNative id={id} multiple className='rounded-none border-none'>
          <option value='1'>Vegetarian</option>
          <option value='2'>Vegan</option>
          <option value='3'>Gluten-Free</option>
          <option value='4'>Halal</option>
          <option value='5'>Kosher</option>
          <option value='6'>Dairy-Free</option>
        </SelectNative>
      </div>
    </div>
  )
}

export default SelectNativeMultipleDemo
