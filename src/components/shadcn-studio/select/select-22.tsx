import { useId } from 'react'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const SelectWithOptionsGroupsDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with options groups</Label>
      <Select defaultValue='7'>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue placeholder='Select framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value='1'>United States</SelectItem>
            <SelectItem value='2'>Canada</SelectItem>
            <SelectItem value='3'>Mexico</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value='4'>United Kingdom</SelectItem>
            <SelectItem value='5'>Germany</SelectItem>
            <SelectItem value='6'>France</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value='7'>India</SelectItem>
            <SelectItem value='8'>Japan</SelectItem>
            <SelectItem value='9'>China</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithOptionsGroupsDemo
