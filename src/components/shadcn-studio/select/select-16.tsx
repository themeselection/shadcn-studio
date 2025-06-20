import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithColorBorderAndRingDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with colored border and ring</Label>
      <Select defaultValue='1'>
        <SelectTrigger
          id={id}
          className='w-full focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40'
        >
          <SelectValue placeholder='Select framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Electronics</SelectItem>
          <SelectItem value='2'>Clothing</SelectItem>
          <SelectItem value='3'>Home Appliances</SelectItem>
          <SelectItem value='4'>Books</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithColorBorderAndRingDemo
