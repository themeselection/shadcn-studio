import { Checkbox } from '@/registry/new-york/ui/checkbox'
import { Label } from '@/registry/new-york/ui/label'

const CheckboxCardDemo = () => {
  return (
    <div className='space-y-2'>
      <Label className='hover:bg-accent/50 flex items-start gap-2 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950'>
        <Checkbox
          defaultChecked
          className='data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700'
        />
        <div className='grid gap-1.5 font-normal'>
          <p className='text-sm leading-none font-medium'>Auto Start</p>
          <p className='text-muted-foreground text-sm'>Starting with your OS.</p>
        </div>
      </Label>
      <Label className='hover:bg-accent/50 flex items-start gap-2 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950'>
        <Checkbox className='data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700' />
        <div className='grid gap-1.5 font-normal'>
          <p className='text-sm leading-none font-medium'>Auto update</p>
          <p className='text-muted-foreground text-sm'>Download and install new version</p>
        </div>
      </Label>
    </div>
  )
}

export default CheckboxCardDemo
