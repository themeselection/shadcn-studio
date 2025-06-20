import { Button } from '@/components/ui/button'

const ButtonSocialDemo = () => {
  return (
    <div className='flex w-full max-w-56 flex-col justify-center gap-4'>
      <Button variant='outline' className='!border-[#e84133] !text-[#e84133]'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
          alt='Google Icon'
          className='size-5'
        />
        <span className='flex flex-1 justify-center'>Continue with Google</span>
      </Button>
      <Button variant='outline' className='border-black text-black dark:border-white dark:text-white'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png?width=20&height=20&format=auto'
          alt='X Icon'
          className='size-5 dark:invert'
        />
        <span className='flex flex-1 justify-center'>Continue with X</span>
      </Button>
      <Button variant='outline' className='!border-[#0866fe] !text-[#0866fe]'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png?width=20&height=20&format=auto'
          alt='Facebook Icon'
          className='size-5'
        />
        <span className='flex flex-1 justify-center'>Continue with Facebook</span>
      </Button>
      <Button variant='outline' className='border-black text-black dark:border-white dark:text-white'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto'
          alt='GitHub Icon'
          className='size-5 dark:invert'
        />
        <span className='flex flex-1 justify-center'>Continue with GitHub</span>
      </Button>
    </div>
  )
}

export default ButtonSocialDemo
