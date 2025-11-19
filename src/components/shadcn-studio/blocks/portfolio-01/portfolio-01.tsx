import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const Portfolio = ({ images }: { images: string[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Section Header */}
        <div className='space-y-4'>
          <Badge variant='outline' className='text-sm font-normal'>
            Our portfolio
          </Badge>

          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Our Impactful Creations</h2>

          <p className='text-muted-foreground text-xl'>
            A glimpse into our work, showcasing the power of design, technology, and strategic thinking.
          </p>
        </div>

        {/* Portfolio Content */}
        <div className='grid gap-6 lg:grid-cols-3'>
          {/* Left Section */}
          <div className='columns-1 gap-6 sm:col-span-2 sm:columns-2'>
            {images.map((image, index) => (
              <div key={index} className='mb-6 break-inside-avoid-column overflow-hidden rounded-xl'>
                <img src={image} alt={`Portfolio Image ${index + 1}`} className='w-full object-cover' />
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className='space-y-6 px-6'>
            <h3 className='text-3xl font-medium'>AI Innovations</h3>

            <p className='text-muted-foreground'>
              Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various
              industries.Our technologies empower businesses to automate repetitive tasks, allowing teams to focus on
              strategic initiatives.
              <br />
              Join us in transforming the future of work with intelligent systems that adapt to your unique needs.
            </p>

            <Separator />

            <ul className='space-y-4'>
              <li className='flex items-center gap-8'>
                <span className='w-21 text-lg font-medium'>Client:</span>
                <span className='text-muted-foreground'>AI Innovations</span>
              </li>
              <li className='flex items-center gap-8'>
                <span className='w-21 text-lg font-medium'>Services:</span>
                <span className='text-muted-foreground'>Machine Learning</span>
              </li>
              <li className='flex items-center gap-8'>
                <span className='w-21 text-lg font-medium'>Year:</span>
                <span className='text-muted-foreground'>2024</span>
              </li>
            </ul>

            <Separator />

            <div className='flex items-center gap-8'>
              <span className='w-21 text-lg font-medium'>Share:</span>
              <div className='flex gap-2'>
                <a href='#'>
                  <FacebookIcon className='size-5.5 text-sky-600' />
                </a>
                <a href='#'>
                  <InstagramIcon className='text-destructive size-5.5' />
                </a>
                <a href='#'>
                  <GithubIcon className='text-primary size-5.5' />
                </a>
                <a href='#'>
                  <TwitterIcon className='size-5.5 text-sky-600' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
