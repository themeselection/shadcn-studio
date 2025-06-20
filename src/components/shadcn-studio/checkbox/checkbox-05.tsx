import { Checkbox } from '@/components/ui/checkbox'

const CheckboxSizesDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox defaultChecked aria-label='Size default' />
      <Checkbox className='size-5' defaultChecked aria-label='Size small' />
      <Checkbox className='size-6' defaultChecked aria-label='Size large' />
    </div>
  )
}

export default CheckboxSizesDemo
