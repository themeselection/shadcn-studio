import { useId } from 'react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithLeadingTextDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with leading text</Label>
      <Select defaultValue='1'>
        <SelectTrigger id={id} className='w-full'>
          <span>
            Favorite Movie: <SelectValue placeholder='Select a movie' />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Inception</SelectItem>
          <SelectItem value='2'>Interstellar</SelectItem>
          <SelectItem value='3'>The Dark Knight</SelectItem>
          <SelectItem value='4'>Pulp Fiction</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithLeadingTextDemo
