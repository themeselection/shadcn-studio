// Next Imports
import type { Metadata } from 'next'

// Component Imports
import BlocksIndexContent from './BlocksIndexContent'

export const metadata: Metadata = {
  title: 'Shadcn Blocks',
  description:
    'Explore free Shadcn blocks to speed up your development. Fully customizable, easy to use, and dark mode ready.',
  openGraph: {
    title: 'Shadcn Blocks',
    description:
      'Explore free Shadcn blocks to speed up your development. Fully customizable, easy to use, and dark mode ready.',
    type: 'website',
    siteName: 'Shadcn Studio',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blocks`,
    images: [
      {
        url: 'https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Shadcn Studio - Shadcn UI Components, Blocks & Templates'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadcn Blocks',
    description:
      'Explore free Shadcn blocks to speed up your development. Fully customizable, easy to use, and dark mode ready.'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blocks`
  }
}

const BlocksPage = async () => {
  return <BlocksIndexContent />
}

export default BlocksPage
