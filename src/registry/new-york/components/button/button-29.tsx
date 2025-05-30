import { Button } from '@/registry/new-york/ui/button'

const ButtonSocialIconsDemo = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
      <Button variant='outline' size='icon'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
          alt='Google Icon'
          className='size-5'
        />
      </Button>
      <Button variant='outline' size='icon'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/twitter-icon.png?width=20&height=20&format=auto'
          alt='X Icon'
          className='size-5 dark:invert'
        />
      </Button>
      <Button variant='outline' size='icon'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/facebook-icon.png?width=20&height=20&format=auto'
          alt='Facebook Icon'
          className='size-5'
        />
      </Button>
      <Button variant='outline' size='icon'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto'
          alt='GitHub Icon'
          className='size-5 dark:invert'
        />
      </Button>
    </div>
  )
}

export default ButtonSocialIconsDemo
