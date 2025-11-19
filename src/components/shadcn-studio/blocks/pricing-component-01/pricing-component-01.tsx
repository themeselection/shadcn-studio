'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'

type PricingPlan = {
  id: string
  title: string
  description: string
  monthly: number
  annual: number
}[]

const PricingCards = ({ pricingData }: { pricingData: PricingPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col items-center gap-10 text-center'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Select the Best Plan for You!</h2>
            <p className='text-muted-foreground text-xl'>
              Discover Our Flexible Plans, Compare Features, and Choose <br />
              the Ideal Option for Your Needs.
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <span className='font-medium'>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className='font-medium'>Annually</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-6 max-lg:flex-col'>
          {pricingData.map(plan => {
            const price = isAnnual ? plan.annual : plan.monthly
            const period = isAnnual ? 'year' : 'month'
            const savings = isAnnual ? plan.monthly * 12 - plan.annual : null

            return (
              <Card key={plan.id} className='w-full shadow-none sm:w-lg'>
                <CardContent className='flex justify-between gap-4'>
                  <div className='flex flex-col justify-center gap-5'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-3xl font-semibold'>{plan.title}</h3>
                      <p className='text-muted-foreground text-base'>{plan.description}</p>
                    </div>
                    <div className='flex flex-col items-end sm:hidden'>
                      <div className='flex items-end'>
                        <span className='text-primary text-5xl font-bold'>${price}</span>
                        <span className='text-muted-foreground ml-1 text-lg'>/{period}</span>
                      </div>
                      {savings && (
                        <span className='mt-1 text-sm font-medium text-green-600'>
                          Save ${savings.toLocaleString()}/year
                        </span>
                      )}
                    </div>
                    <Button className='w-fit'>Enterprise</Button>
                  </div>

                  <Separator orientation='vertical' className='!h-[132px] max-sm:hidden' />

                  <div className='flex items-end justify-end max-sm:hidden'>
                    <div className='flex flex-col items-end'>
                      <div className='flex items-end'>
                        <span className='text-primary text-5xl font-bold'>${price}</span>
                        <span className='text-muted-foreground ml-1 text-lg'>/{period}</span>
                      </div>
                      {savings && (
                        <span className='mt-1 text-sm font-medium text-green-600'>
                          Save ${savings.toLocaleString()}/year
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingCards
