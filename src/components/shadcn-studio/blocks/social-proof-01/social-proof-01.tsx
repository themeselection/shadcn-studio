import { CircleCheckIcon } from 'lucide-react'

type Feature = {
  title: string
  description: string
}

const SocialProof = ({ features }: { features: Feature[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-20 max-lg:flex-col'>
          <div>
            <div className='space-y-4'>
              <p className='text-primary text-sm font-medium uppercase'>Social Proof</p>
              <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Create Impactful White Label Reports</h2>
              <p className='text-muted-foreground text-lg'>
                Craft customizable reports that showcase your campaign&apos;s success, align with your brand, and
                simplify sharing insights with stakeholders while enabling data export and ROI analysis.
              </p>
            </div>

            <ul className='mt-11 space-y-6 text-lg font-medium'>
              {features.map((feature, index) => (
                <li key={index} className='flex gap-2'>
                  <CircleCheckIcon className='mt-0.75 size-5' />
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='shrink-0'>
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/social-proof/image-1.png'
              alt='Social Widget'
              className='w-142 object-contain dark:hidden'
            />
            <img
              src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/social-proof/image-1-dark.png'
              alt='Social Widget'
              className='hidden w-142 object-contain dark:inline-block'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
