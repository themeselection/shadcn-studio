import { Textarea } from '@/components/ui/textarea'

const TextareaSizesDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Textarea className='min-h-10 py-1.5' placeholder='Small Textarea' />
      <Textarea placeholder='Default(Medium) Textarea' />
      <Textarea className='min-h-20 py-2.5' placeholder='Large Textarea' />
    </div>
  )
}

export default TextareaSizesDemo
