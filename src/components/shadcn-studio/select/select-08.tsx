import { useId } from 'react'

import { SelectNative } from '@/components/ui/select-native'

const NativeSelectWithOverlappingLabelDemo = () => {
  const id = useId()

  return (
    <div className='group relative w-full max-w-xs'>
      <label
        htmlFor={id}
        className='bg-background text-foreground absolute start-2 top-0 z-10 block -translate-y-1/2 px-1 text-xs font-medium group-has-[select:disabled]:opacity-50'
      >
        Native select with overlapping label
      </label>
      <SelectNative id={id}>
        <option value='1'>Developer</option>
        <option value='2'>Designer</option>
        <option value='3'>Manager</option>
        <option value='4'>QA Engineer</option>
      </SelectNative>
    </div>
  )
}

export default NativeSelectWithOverlappingLabelDemo
