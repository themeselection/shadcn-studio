import HeroSection from '@/components/shadcn-studio/blocks/hero-section-01/hero-section-01'
import Header from '@/components/shadcn-studio/blocks/hero-section-01/header'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/hero-section-01/header'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col'>
        <HeroSection />
      </main>
    </div>
  )
}

export default HeroSectionPage
