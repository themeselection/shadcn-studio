'use client'

import { ListBox, ListBoxItem } from 'react-aria-components'

import { Label } from '@/components/ui/label'

const listitems = [
  { id: 'usd', label: 'USD (United States Dollar)' },
  { id: 'eur', label: 'EUR (Euro)' },
  { id: 'gbp', label: 'GBP (British Pound)', isDisabled: true },
  { id: 'jpy', label: 'JPY (Japanese Yen)' }
]

const ListboxSingleOptionDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label>Listbox with single option selectable</Label>
      <div className='border-input overflow-hidden rounded-md border'>
        <ListBox
          className='bg-background space-y-1 p-1 text-sm shadow-xs transition-[color,box-shadow]'
          aria-label='Select framework'
          selectionMode='single'
          defaultSelectedKeys={['svelte']}
        >
          {listitems.map(item => (
            <ListBoxItem
              key={item.id}
              className='data-[disabled]:text-muted-foreground data-[selected]:bg-accent data-[selected]:text-accent-foreground flex items-center justify-between rounded-sm px-2 py-1.5'
              textValue={item.label}
              isDisabled={item.isDisabled}
            >
              {item.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </div>
      <p className='text-muted-foreground text-xs' role='region' aria-live='polite'>
        Built using{' '}
        <a
          href='https://react-spectrum.adobe.com/react-aria/ListBox.html'
          className='hover:text-primary underline'
          target='_blank'
        >
          React Aria
        </a>
      </p>
    </div>
  )
}

export default ListboxSingleOptionDemo
