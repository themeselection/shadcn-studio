import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'

const CardTopImageDemo = () => {
  return (
    <Card className='max-w-md pt-0'>
      <CardContent className='px-0'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto'
          alt='Banner'
          className='aspect-video h-70 rounded-t-xl object-cover'
        />
      </CardContent>
      <CardHeader>
        <CardTitle>Ethereal Swirl Gradient</CardTitle>
        <CardDescription>Smooth, flowing gradients blending rich reds and blues in an abstract swirl.</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
        <Button>Explore More</Button>
        <Button variant={'outline'}>Download Now</Button>
      </CardFooter>
    </Card>
  )
}

export default CardTopImageDemo
