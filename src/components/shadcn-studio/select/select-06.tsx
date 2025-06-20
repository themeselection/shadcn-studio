import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const NativeSelectRequiredDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id} className='gap-1'>
        Required native select <span className='text-destructive'>*</span>
      </Label>
      <SelectNative id={id} required>
        <option value='1'>Action</option>
        <option value='2'>Comedy</option>
        <option value='3'>Romance</option>
        <option value='4'>Thriller</option>
      </SelectNative>
    </div>
  )
}

export default NativeSelectRequiredDemo
