import { useId } from 'react'

import { GuitarIcon, HeadphonesIcon, MicVocalIcon, MusicIcon } from 'lucide-react'

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

const SelectDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select option with icon</Label>
      <Select defaultValue='rock'>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue placeholder='Select a music genre' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Music Genres</SelectLabel>
            <SelectItem value='rock'>
              <GuitarIcon />
              Rock
            </SelectItem>
            <SelectItem value='electronic'>
              <HeadphonesIcon />
              Electronic
            </SelectItem>
            <SelectItem value='pop'>
              <MicVocalIcon />
              Pop
            </SelectItem>
            <SelectItem value='jazz'>
              <MusicIcon />
              Jazz
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectDemo
