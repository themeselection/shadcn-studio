import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/registry/new-york/ui/card'
import { Button } from '@/registry/new-york/ui/button'

const CardHorizontalDemo = () => {
  return (
    <Card className='max-w-lg py-0 sm:flex-row sm:gap-0'>
      <CardContent className='grow-1 px-0'>
        <img
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png'
          alt='Banner'
          className='size-full rounded-s-xl'
        />
      </CardContent>
      <div className='sm:min-w-54'>
        <CardHeader className='pt-6'>
          <CardTitle>Dreamy Colorwave Gradient</CardTitle>
          <CardDescription>A smooth blend of vibrant pinks, purples, and blues for a magical touch.</CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 py-6'>
          <Button className='bg-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20'>
            Explore More
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default CardHorizontalDemo
