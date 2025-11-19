import { Label } from '@/components/ui/label'
import type { Option } from '@/components/ui/multi-select'
import MultipleSelector from '@/components/ui/multi-select'

const categories: Option[] = [
  {
    value: 'clothing',
    label: 'Clothing'
  },
  {
    value: 'footwear',
    label: 'Footwear'
  },
  {
    value: 'accessories',
    label: 'Accessories'
  },
  {
    value: 'jewelry',
    label: 'Jewelry',
    disable: true
  },
  {
    value: 'outerwear',
    label: 'Outerwear'
  },
  {
    value: 'fragrance',
    label: 'Fragrance'
  },
  {
    value: 'makeup',
    label: 'Makeup'
  },
  {
    value: 'skincare',
    label: 'Skincare'
  },
  {
    value: 'furniture',
    label: 'Furniture'
  },
  {
    value: 'lighting',
    label: 'Lighting'
  },
  {
    value: 'kitchenware',
    label: 'Kitchenware',
    disable: true
  },
  {
    value: 'computers',
    label: 'Computers'
  },
  {
    value: 'audio',
    label: 'Audio'
  },
  {
    value: 'wearables',
    label: 'Wearables'
  },
  {
    value: 'supplements',
    label: 'Supplements'
  },
  {
    value: 'sportswear',
    label: 'Sportswear'
  }
]

const MultipleSelectDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Label>Multiselect</Label>
      <MultipleSelector
        commandProps={{
          label: 'Select categories'
        }}
        value={categories.slice(0, 2)}
        defaultOptions={categories}
        placeholder='Select categories'
        hideClearAllButton
        hidePlaceholderWhenSelected
        emptyIndicator={<p className='text-center text-sm'>No results found</p>}
        className='w-full'
      />
      <p className='text-muted-foreground text-xs' role='region' aria-live='polite'>
        Inspired by{' '}
        <a
          href='https://shadcnui-expansions.typeart.cc/docs/multiple-selector'
          className='hover:text-primary underline'
          target='_blank'
        >
          shadcn/ui expressions
        </a>
      </p>
    </div>
  )
}

export default MultipleSelectDemo
