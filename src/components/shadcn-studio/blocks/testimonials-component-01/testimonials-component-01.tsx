import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Rating } from '@/components/ui/rating'

export type TestimonialItem = {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[]
}

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <Carousel
        className='mx-auto flex max-w-7xl gap-12 px-4 max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8'
        opts={{
          align: 'start',
          slidesToScroll: 1
        }}
      >
        {/* Left Content */}
        <div className='space-y-4 sm:w-1/2 lg:w-1/3'>
          <p className='text-primary text-sm font-medium uppercase'>Real customers</p>

          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Customers Feedback</h2>

          <p className='text-muted-foreground text-xl'>
            From career changes to dream jobs, here&apos;s how Shadcn Studio helped.
          </p>

          <div className='flex items-center gap-4'>
            <CarouselPrevious
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-md disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-md disabled:opacity-100'
            />
          </div>
        </div>

        {/* Right Testimonial Carousel */}
        <div className='relative max-w-196 sm:w-1/2 lg:w-2/3'>
          <CarouselContent className='sm:-ml-6'>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='sm:pl-6 lg:basis-1/2'>
                <Card className='hover:border-primary h-full transition-colors duration-300'>
                  <CardContent className='space-y-5'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-10 rounded-full'>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className='rounded-full text-sm'>
                          {testimonial.name
                            .split(' ', 2)
                            .map(n => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className='flex-1'>
                        <h4 className='font-medium'>{testimonial.name}</h4>
                        <p className='text-muted-foreground text-sm'>
                          {testimonial.role} at{' '}
                          <span className='text-card-foreground font-semibold'>{testimonial.company}</span>
                        </p>
                      </div>
                    </div>

                    <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />
                    <p>{testimonial.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  )
}

export default TestimonialsComponent
