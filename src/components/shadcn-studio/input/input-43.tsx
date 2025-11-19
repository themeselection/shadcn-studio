'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button, Group, Input, Label, NumberField } from 'react-aria-components'

const InputWithPlusMinusButtonsRoundedDemo = () => {
  return (
    <NumberField defaultValue={1024} minValue={0} className='w-full max-w-xs space-y-2'>
      <Label className='flex items-center gap-2 text-sm leading-none font-medium select-none'>
        Input with plus/minus buttons (rounded)
      </Label>
      <Group className='dark:bg-input/30 border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border bg-transparent text-base whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-within:ring-[3px] md:text-sm'>
        <Button
          slot='decrement'
          className='border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground ml-2 flex aspect-square h-5 items-center justify-center rounded-sm border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
        >
          <MinusIcon className='size-3' />
          <span className='sr-only'>Decrement</span>
        </Button>
        <Input className='selection:bg-primary selection:text-primary-foreground w-full grow px-3 py-2 text-center tabular-nums outline-none' />
        <Button
          slot='increment'
          className='border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground mr-2 flex aspect-square h-5 items-center justify-center rounded-sm border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
        >
          <PlusIcon className='size-3' />
          <span className='sr-only'>Increment</span>
        </Button>
      </Group>
      <p className='text-muted-foreground text-xs'>
        Built with{' '}
        <a
          className='hover:text-foreground underline'
          href='https://react-spectrum.adobe.com/react-aria/NumberField.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Aria
        </a>
      </p>
    </NumberField>
  )
}

export default InputWithPlusMinusButtonsRoundedDemo
