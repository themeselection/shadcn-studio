import Pricing from '@/components/shadcn-studio/blocks/pricing-component-01/pricing-component-01'

const pricingData = [
  {
    id: 'starter',
    title: 'Starter',
    description: 'Ideal for crypto pros!',
    monthly: 99,
    annual: 999
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Ideal for business owners.',
    monthly: 199,
    annual: 1999
  }
]

const PricingPage = () => {
  return <Pricing pricingData={pricingData} />
}

export default PricingPage
