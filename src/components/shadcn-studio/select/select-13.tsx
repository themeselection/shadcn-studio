import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithHelperTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with helper text</Label>
      <Select defaultValue='3'>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue placeholder='Select framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Florida</SelectItem>
          <SelectItem value='2'>New York</SelectItem>
          <SelectItem value='3'>California</SelectItem>
          <SelectItem value='4'>Texas</SelectItem>
        </SelectContent>
      </Select>
      <p className='text-muted-foreground mt-2 text-xs' role='region' aria-live='polite'>
        Could you share which city you&apos;re based in?
      </p>
    </div>
  )
}

export default SelectWithHelperTextDemo
