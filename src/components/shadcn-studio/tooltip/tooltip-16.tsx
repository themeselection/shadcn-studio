import { AnimatedTooltip } from '@/components/ui/motion-tooltip'

const avatars = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    designation: 'Product Manager'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    designation: 'Software Engineer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    designation: 'UI/UX Designer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson',
    designation: 'Junior Developer'
  }
]

const AnimatedTooltipDemo = () => {
  return (
    <div className='space-y-4'>
      <div className='flex w-full flex-row items-center justify-center'>
        <AnimatedTooltip items={avatars} />
      </div>
      <p className='text-muted-foreground text-xs'>
        Inspired by{' '}
        <a
          className='hover:text-foreground underline'
          href='https://ui.aceternity.com/components/animated-tooltip'
          target='_blank'
          rel='noopener noreferrer'
        >
          Aceternity UI
        </a>
      </p>
    </div>
  )
}

export default AnimatedTooltipDemo
