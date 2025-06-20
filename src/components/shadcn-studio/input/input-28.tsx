import { useId } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const InputStartSelectDemo = () => {
  const id = useId()

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with start select</Label>
      <div className='flex rounded-md shadow-xs'>
        <Select defaultValue='https://'>
          <SelectTrigger id={id} className='rounded-e-none shadow-none focus-visible:z-1'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='https://' className='pr-2 [&_svg]:hidden'>
              https://
            </SelectItem>
            <SelectItem value='http://' className='pr-2 [&_svg]:hidden'>
              http://
            </SelectItem>
            <SelectItem value='ftp://' className='pr-2 [&_svg]:hidden'>
              ftp://
            </SelectItem>
            <SelectItem value='sftp://' className='pr-2 [&_svg]:hidden'>
              sftp://
            </SelectItem>
            <SelectItem value='ws://' className='pr-2 [&_svg]:hidden'>
              ws://
            </SelectItem>
            <SelectItem value='wss://' className='pr-2 [&_svg]:hidden'>
              wss://
            </SelectItem>
          </SelectContent>
        </Select>
        <Input id={id} type='text' placeholder='shadcnstudio.com' className='-ms-px rounded-s-none shadow-none' />
      </div>
    </div>
  )
}

export default InputStartSelectDemo
