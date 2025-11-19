// React Imports
import type { ReactNode } from 'react'

// Next Imports
import { Geist, Geist_Mono, Kalam } from 'next/font/google'
import type { Metadata } from 'next'

// Component Imports
import NextProvider from '@/providers/NextProvider'
import { SettingsProvider } from '@/contexts/settingsContext'
import { ThemeProvider } from '@/providers/ThemesProvider'
import { Toaster } from '@/components/ui/sonner'

// Util Imports
import { getSettingsFromCookie } from '@/utils/serverHelpers'
import { cn } from '@/lib/utils'

// Style Imports
import './globals.css'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

const fontKalam = Kalam({
  subsets: ['latin'],
  variable: '--font-kalam',
  weight: ['300', '400', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    template: '%s - Shadcn Studio',
    default: 'Shadcn Studio - Shadcn UI Components, Blocks & Templates'
  },
  description:
    'Accelerate your project development with ready-to-use, & customizable 1000+ Shadcn UI Components, Blocks, UI Kit, Boilerplate, Templates & Themes with AI Tools.',
  keywords: ['shadcn ui', 'shadcn/ui', 'shadcn studio', 'shadcn ui library', 'shadcn/ui library'],
  icons: {
    icon: [
      { url: 'https://cdn.shadcnstudio.com/ss-assets/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://cdn.shadcnstudio.com/ss-assets/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://cdn.shadcnstudio.com/ss-assets/favicon/favicon.ico', sizes: '48x48', type: 'image/x-icon' }
    ],
    apple: [
      {
        url: 'https://cdn.shadcnstudio.com/ss-assets/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: 'https://cdn.shadcnstudio.com/ss-assets/favicon/android-chrome-192x192.png',
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: 'https://cdn.shadcnstudio.com/ss-assets/favicon/android-chrome-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  openGraph: {
    title: {
      template: '%s - Shadcn Studio',
      default: 'Shadcn Studio - Shadcn UI Components, Blocks & Templates'
    },
    description:
      'Accelerate your project development with ready-to-use, & customizable 1000+ Shadcn UI Components, Blocks, UI Kit, Boilerplate, Templates & Themes with AI Tools.',
    type: 'website',
    siteName: 'Shadcn Studio',
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
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
    title: {
      template: '%s - Shadcn Studio',
      default: 'Shadcn Studio - Shadcn UI Components, Blocks & Templates'
    },
    description:
      'Accelerate your project development with ready-to-use, & customizable 1000+ Shadcn UI Components, Blocks, UI Kit, Boilerplate, Templates & Themes with AI Tools.'
  }
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
  // Vars
  const settingsCookie = await getSettingsFromCookie()

  return (
    <html
      lang='en'
      className={cn(
        fontSans.variable,
        fontMono.variable,
        fontKalam.variable,
        'flex min-h-full w-full scroll-smooth',
        settingsCookie.mode
      )}
      style={{ colorScheme: settingsCookie.mode }}
    >
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Noto+Serif+Georgian:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Delius+Swash+Caps&family=Gabriela&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <NextProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
          <SettingsProvider settingsCookie={settingsCookie}>
            <ThemeProvider>{children}</ThemeProvider>
            <Toaster />
          </SettingsProvider>
        </NextProvider>
      </body>
    </html>
  )
}

export default RootLayout
