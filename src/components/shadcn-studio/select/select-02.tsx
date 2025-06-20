import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const SelectNativePlaceholderDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Native select with placeholder</Label>
      <SelectNative id={id} defaultValue=''>
        <option value='' disabled>
          Please select a gender
        </option>
        <option value='1'>Male</option>
        <option value='2'>Female</option>
        <option value='3'>Other</option>
      </SelectNative>
    </div>
  )
}

export default SelectNativePlaceholderDemo
