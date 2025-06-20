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

const SelectBackgroundColorDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Select with background color</Label>
      <Select defaultValue='hindi'>
        <SelectTrigger className='w-full border-sky-600 bg-sky-600/10 text-sky-600 shadow-none focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/10 dark:focus-visible:ring-sky-400/40 [&_svg]:!text-sky-600 dark:[&_svg]:!text-sky-400'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className='[&_div:focus]:bg-sky-600/20 [&_div:focus]:text-sky-600 dark:[&_div:focus]:bg-sky-400/20 dark:[&_div:focus]:text-sky-400'>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value='hindi' className='focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400'>
              Hindi
            </SelectItem>
            <SelectItem value='english' className='focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400'>
              English
            </SelectItem>
            <SelectItem value='spanish' className='focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400'>
              Spanish
            </SelectItem>
            <SelectItem value='mandarin' className='focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400'>
              Mandarin
            </SelectItem>
            <SelectItem value='french' className='focus:[&_svg]:!text-sky-600 dark:focus:[&_svg]:!text-sky-400'>
              French
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectBackgroundColorDemo
