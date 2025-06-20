import { useId } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithInsetLabelDemo = () => {
  const id = useId()

  return (
    <div className='border-input group bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none'>
      <label
        htmlFor={id}
        className='text-foreground dark:bg-input/30 dark:group-hover:bg-input/50 block px-3 pt-1 text-xs font-medium'
      >
        Select with inset label
      </label>
      <Select>
        <SelectTrigger
          id={id}
          className='dark:group-hover:bg-input/50 w-full rounded-t-none border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
        >
          <SelectValue placeholder='Select payment method' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Credit Card</SelectItem>
          <SelectItem value='2'>Google Pay</SelectItem>
          <SelectItem value='3'>PayPal</SelectItem>
          <SelectItem value='4'>Bitcoin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectWithInsetLabelDemo
