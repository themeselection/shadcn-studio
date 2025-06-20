import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const NativeSelectWithErrorDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Native select with error</Label>
      <SelectNative id={id} aria-invalid>
        <option value='1'>IST (Indian Standard Time)</option>
        <option value='2'>EST (Eastern Standard Time)</option>
        <option value='3'>PST (Pacific Standard Time)</option>
        <option value='4'>GMT (Greenwich Mean Time)</option>
      </SelectNative>
      <p className='text-destructive mt-2 text-xs' role='alert' aria-live='polite'>
        Selected option is invalid
      </p>
    </div>
  )
}

export default NativeSelectWithErrorDemo
