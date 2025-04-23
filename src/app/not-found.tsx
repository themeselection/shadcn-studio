// Next Imports
import Link from 'next/link'

// Component Imports
import { Button } from '@/registry/new-york/ui/button'

// SVG Imports
import Icon404 from '@/assets/svg/404'

const NotFound = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-9'>
      <Icon404 className='h-120 w-146' />
      <div className='flex flex-col items-center gap-4'>
        <p className='text-muted-foreground text-2xl'>We couldn&apos;t find the page you are looking for</p>
        <Button className='rounded-full' asChild>
          <Link href='/'>Go back to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
