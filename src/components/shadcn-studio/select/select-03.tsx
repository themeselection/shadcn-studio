import { useId } from 'react'

import { FilmIcon } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { SelectNative } from '@/components/ui/select-native'

const NativeSelectWithIconDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Native select with icon</Label>
      <div className='group relative'>
        <SelectNative id={id} className='pl-9' defaultValue=''>
          <option value='' disabled>
            Pick your favorite movie
          </option>
          <option value='1'>Godfather</option>
          <option value='2'>A Working Man</option>
          <option value='3'>The Dark Knight</option>
          <option value='4'>Inception</option>
        </SelectNative>
        <div className='text-muted-foreground/80 pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 group-has-[select[disabled]]:opacity-50'>
          <FilmIcon size={16} aria-hidden='true' />
        </div>
      </div>
    </div>
  )
}

export default NativeSelectWithIconDemo
