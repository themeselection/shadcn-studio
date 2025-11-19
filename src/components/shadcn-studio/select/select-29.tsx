import { useId } from 'react'

import { CircleIcon } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectStatusDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Status select</Label>
      <Select defaultValue='1'>
        <SelectTrigger
          id={id}
          className='w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0'
        >
          <SelectValue placeholder='Select status' />
        </SelectTrigger>
        <SelectContent className='[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0'>
          <SelectItem value='1'>
            <span className='flex items-center gap-2'>
              <CircleIcon className='size-2 fill-violet-500 text-violet-500' />
              <span className='truncate'>In Progress</span>
            </span>
          </SelectItem>
          <SelectItem value='2'>
            <span className='flex items-center gap-2'>
              <CircleIcon className='size-2 fill-amber-500 text-amber-500' />
              <span className='truncate'>Pending</span>
            </span>
          </SelectItem>
          <SelectItem value='3'>
            <span className='flex items-center gap-2'>
              <CircleIcon className='size-2 fill-emerald-600 text-emerald-600' />
              <span className='truncate'>Completed</span>
            </span>
          </SelectItem>
          <SelectItem value='4'>
            <span className='flex items-center gap-2'>
              <CircleIcon className='size-2 fill-gray-500 text-gray-500' />
              <span className='truncate'>Cancelled</span>
            </span>
          </SelectItem>
          <SelectItem value='5'>
            <span className='flex items-center gap-2'>
              <CircleIcon className='size-2 fill-red-500 text-red-500' />
              <span className='truncate'>Rejected</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectStatusDemo
