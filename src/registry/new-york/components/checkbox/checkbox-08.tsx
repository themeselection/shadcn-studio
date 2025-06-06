import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const technologies = ['React', 'Next.js', 'Remix']

const CheckboxHorizontalGroupDemo = () => {
  return (
    <div className='space-y-4'>
      <Label className='font-semibold'>Technologies</Label>
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        {technologies.map(label => (
          <div key={label} className='flex items-center gap-2'>
            <Checkbox id={label} />
            <Label htmlFor={label}>{label}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxHorizontalGroupDemo
