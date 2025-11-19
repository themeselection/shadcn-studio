import LogoCloud from '@/components/shadcn-studio/blocks/logo-cloud-01/logo-cloud-01'

const logos = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo-bw.png',
    alt: 'Amazon'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo-bw.png',
    alt: 'HubSpot'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo-bw.png',
    alt: 'Walmart'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo-bw.png',
    alt: 'Microsoft'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/evernote-icon-bw.png',
    alt: 'Evernote'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-logo-bw.png',
    alt: 'PayPal'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo-bw.png',
    alt: 'Airbnb'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo-bw.png',
    alt: 'Adobe'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-logo-bw.png',
    alt: 'Shopify'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo-bw.png',
    alt: 'Huawei'
  }
]

const LogoCloudPage = () => {
  return <LogoCloud logos={logos} />
}

export default LogoCloudPage
