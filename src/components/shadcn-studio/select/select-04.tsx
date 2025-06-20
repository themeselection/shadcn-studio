import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const NativeSelectWithHelperTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Native select with helper text</Label>
      <SelectNative id={id}>
        <option value='1'>Florida</option>
        <option value='2'>California</option>
        <option value='3'>San Francisco</option>
        <option value='4'>Alabama</option>
      </SelectNative>
      <p className='text-muted-foreground mt-2 text-xs' role='region' aria-live='polite'>
        Could you share which city you&apos;re based in?
      </p>
    </div>
  )
}

export default NativeSelectWithHelperTextDemo
