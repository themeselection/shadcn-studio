import Portfolio from '@/components/shadcn-studio/blocks/portfolio-01/portfolio-01'

const images: string[] = [
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-37.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-36.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-35.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-34.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-33.png',
  'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-32.png'
]

const PortfolioPage = () => {
  return <Portfolio images={images} />
}

export default PortfolioPage
