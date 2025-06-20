import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectInvalidState = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with error</Label>
      <Select defaultValue='1'>
        <SelectTrigger id={id} aria-invalid className='w-full'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Tesla</SelectItem>
          <SelectItem value='2'>BMW</SelectItem>
          <SelectItem value='3'>Audi</SelectItem>
          <SelectItem value='4'>Mercedes-Benz</SelectItem>
        </SelectContent>
      </Select>
      <p className='text-destructive mt-2 text-xs' role='alert' aria-live='polite'>
        Selected option is invalid
      </p>
    </div>
  )
}

export default SelectInvalidState
