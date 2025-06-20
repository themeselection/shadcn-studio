import { useId } from 'react'

const InputInsetLabelDemo = () => {
  const id = useId()

  return (
    <div className='border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative w-full max-w-xs rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none'>
      <label htmlFor={id} className='text-foreground dark:bg-input/30 block px-3 pt-1 text-xs font-medium'>
        Input with inset label
      </label>
      <input
        id={id}
        type='email'
        placeholder='Email address'
        className='text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-9 w-full bg-transparent px-3 pb-1 text-sm focus-visible:outline-none'
      />
    </div>
  )
}

export default InputInsetLabelDemo
