import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const CardGroupDemo = () => {
  return (
    <div className='flex *:rounded-none *:shadow-none max-xl:flex-col max-xl:*:not-last:border-b-0 max-xl:*:first:rounded-t-xl max-xl:*:last:rounded-b-xl xl:*:not-last:border-r-0 xl:*:first:rounded-l-xl xl:*:last:rounded-r-xl'>
      <Card className='overflow-hidden pt-0'>
        <CardContent className='px-0'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-7.png?width=368&format=auto'
            alt='Banner'
            className='aspect-video w-92 object-cover'
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Mystical Blue Swirl</CardTitle>
          <CardDescription>
            Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge seamlessly, creating a
            mesmerizing flow of colors.
          </CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
          <Button>Explore More</Button>
          <Button variant={'outline'}>Download Now</Button>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden pt-0'>
        <CardContent className='px-0'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-4.png?width=368&format=auto'
            alt='Banner'
            className='aspect-video w-92 object-cover'
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Fiery Sunset Gradient</CardTitle>
          <CardDescription>
            Experience the warmth of a radiant sunset with flowing gradients of red, orange, and yellow blending
            effortlessly in an abstract glow.
          </CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
          <Button>Explore More</Button>
          <Button variant={'outline'}>Download Now</Button>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden pt-0'>
        <CardContent className='px-0'>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-5.png?width=368&format=auto'
            alt='Banner'
            className='aspect-video w-92 object-cover'
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Cosmic Blue Waves</CardTitle>
          <CardDescription>
            Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a sense of depth
            and infinite space.
          </CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
          <Button>Explore More</Button>
          <Button variant={'outline'}>Download Now</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardGroupDemo
