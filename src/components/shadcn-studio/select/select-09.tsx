import { useId } from 'react'

import { SelectNative } from '@/components/ui/select-native'

const NativeSelectWithInsetLabelDemo = () => {
  const id = useId()

  return (
    <div className='border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 has-[select:is(:disabled)_*]:pointer-events-none'>
      <label htmlFor={id} className='text-foreground block px-3 pt-1 text-xs font-medium'>
        Native select with inset label
      </label>
      <SelectNative
        id={id}
        defaultValue=''
        className='border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
      >
        <option value='' disabled>
          Pick your favorite movie
        </option>
        <option value='1'>Interstellar</option>
        <option value='2'>Dune</option>
        <option value='3'>The Matrix</option>
        <option value='4'>Catch Me If You Can</option>
      </SelectNative>
    </div>
  )
}

export default NativeSelectWithInsetLabelDemo
