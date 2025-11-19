import { useId } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithOverlappingLabelDemo = () => {
  const id = useId()

  return (
    <div className='group relative w-full max-w-xs'>
      <label
        htmlFor={id}
        className='bg-background text-foreground absolute top-0 left-2 z-10 block -translate-y-1/2 px-1 text-xs font-medium group-has-disabled:opacity-50'
      >
        Select with overlapping label
      </label>
      <Select>
        <SelectTrigger id={id} className='dark:!bg-background w-full'>
          <SelectValue placeholder='Select city' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>New York</SelectItem>
          <SelectItem value='2'>London</SelectItem>
          <SelectItem value='3'>Tokyo</SelectItem>
          <SelectItem value='4'>Paris</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithOverlappingLabelDemo
