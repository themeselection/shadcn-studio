import { useId } from 'react'

import { FilmIcon } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithIconDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with icon</Label>
      <Select defaultValue='god of wars'>
        <SelectTrigger id={id} className='relative w-full ps-9'>
          <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50'>
            <FilmIcon size={16} aria-hidden='true' />
          </div>
          <SelectValue placeholder='Select time' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='god of wars'>God of Wars</SelectItem>
          <SelectItem value='ghost rider'>Ghost Rider</SelectItem>
          <SelectItem value='the cloth'>The Cloth</SelectItem>
          <SelectItem value='the possession'>The Possession</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithIconDemo
