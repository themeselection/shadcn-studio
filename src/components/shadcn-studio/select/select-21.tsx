import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectRequiredDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id} className='gap-1'>
        Required select <span className='text-destructive'>*</span>
      </Label>
      <Select defaultValue='2' required>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue placeholder='Select framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>United States</SelectItem>
          <SelectItem value='2'>Japan</SelectItem>
          <SelectItem value='3'>Australia</SelectItem>
          <SelectItem value='4'>Brazil</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectRequiredDemo
