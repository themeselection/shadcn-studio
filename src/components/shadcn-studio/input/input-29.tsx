import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const InputEndSelectDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with end select</Label>
      <div className='flex rounded-md shadow-xs'>
        <Input
          id={id}
          type='text'
          placeholder='shadcnstudio'
          className='-me-px rounded-e-none shadow-none focus-visible:z-1'
        />
        <Select defaultValue='.com'>
          <SelectTrigger id={id} className='rounded-s-none shadow-none'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='.com' className='pr-2 [&_svg]:hidden'>
              .com
            </SelectItem>
            <SelectItem value='.org' className='pr-2 [&_svg]:hidden'>
              .org
            </SelectItem>
            <SelectItem value='.net' className='pr-2 [&_svg]:hidden'>
              .net
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default InputEndSelectDemo
