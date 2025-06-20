import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const NativeSelectWithOptionGroupsDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Native select with option groups</Label>
      <SelectNative id={id}>
        <optgroup label='Frontend Technologies'>
          <option value='1'>HTML</option>
          <option value='2'>CSS</option>
          <option value='3'>JavaScript</option>
        </optgroup>
        <optgroup label='Backend Technologies'>
          <option value='4'>Node.js</option>
          <option value='5'>Python</option>
          <option value='6'>Java</option>
        </optgroup>
      </SelectNative>
    </div>
  )
}

export default NativeSelectWithOptionGroupsDemo
