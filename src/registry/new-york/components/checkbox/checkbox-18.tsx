import { useId } from 'react'

import { Checkbox } from '@/registry/new-york/ui/motion-checkbox'
import { Label } from '@/registry/new-york/ui/label'

const CheckboxAnimatedTodoListDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        id={id}
        defaultChecked
        className='rounded-full focus-visible:border-blue-500 focus-visible:ring-blue-500/20 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500! dark:text-white dark:focus-visible:ring-blue-500/40'
      />
      <Label
        htmlFor={id}
        className='after:bg-primary peer-data-[state=checked]:text-primary relative after:absolute after:start-0 after:top-1/2 after:h-px after:w-full after:origin-bottom after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100'
      >
        Animated todo list item
      </Label>
    </div>
  )
}

export default CheckboxAnimatedTodoListDemo
