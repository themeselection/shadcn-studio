// Next Imports
import Link from 'next/link'
import type { Metadata } from 'next'

// Third-party Imports
import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

// Component Imports
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import DocsNavigation from '@/components/DocsNavigation'

// Data Imports
import { introFaqs } from '@/assets/data/faqs'

export const metadata: Metadata = {
  title: 'Introduction',
  description:
    'An open-source collection of copy-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.',
  openGraph: {
    title: 'Introduction',
    description:
      'An open-source collection of copy-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.',
    type: 'website',
    siteName: 'Shadcn Studio',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/introduction`,
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
    title: 'Introduction',
    description:
      'An open-source collection of copy-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/introduction`
  }
}

const DocsPage = () => {
  return (
    <div className='flex-1 space-y-6 p-4 sm:space-y-10 sm:p-6 lg:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Introduction</h1>
        <p className='text-muted-foreground'>
          An open-source & premium collection of copy-and-paste shadcn components, blocks, and templates - paired with a
          powerful theme generator & AI Tools to craft, customize, and ship faster.
        </p>
      </div>
      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>What is shadcn/studio?</h2>
        <p className='text-foreground/80'>
          <strong className='text-foreground font-semibold'>
            This isn&apos;t a traditional component library or a replacement for Shadcn
          </strong>
          . Instead, it&apos;s a unique collection offers customizable variants of components, blocks, and templates.
          Preview, customize, and copy-paste them into your apps with ease.
        </p>
        <p className='text-foreground/80'>
          Building on the solid foundation of the Shadcn components & blocks, we&apos;ve enhanced it with
          custom-designed components & blocks to give you a head start. This allows you to craft, customize, and ship
          your projects faster and more efficiently.
        </p>
      </div>

      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>Not a Standard Library, but a Distribution of Components</h2>
        <p className='text-foreground/80'>
          Following the philosophy of Shadcn, shadcn/studio isn&apos;t a conventional &quot;install-from-NPM&quot;
          library. Rather, it&apos;s an open-source distribution of components designed for maximum adaptability. You
          can copy the code, modify styles, adjust logic, or integrate it with other tools—free from the limitations of
          typical libraries. This &quot;open code&quot; model empowers you to customize with confidence and creativity.
        </p>
      </div>

      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>Why Should I use shadcn/studio?</h2>
        <p className='text-foreground/80'>
          shadcn/ui aims to provide core components with a unique distribution system, allowing developers to copy and
          paste reusable, customizable UI elements directly into their codebase.
        </p>

        <p className='text-foreground/80'>
          While this approach offers flexibility and control, it comes with some limitations: a lack of diverse
          component variants examples, limited theme customization options, and limited pre-built blocks. Additionally,
          its extensive customization options, though powerful, can sometimes feel overwhelming, especially for those
          seeking a more guided or streamlined experience.
        </p>
      </div>

      <div className='flex flex-col space-y-3'>
        <h3 className='text-lg font-semibold sm:text-xl'>This is where shadcn/studio shines ✨</h3>
        <p className='text-foreground/80'>
          An open-source & premium collection of copy-and-paste shadcn components, blocks, and templates - paired with a
          powerful theme generator & AI Tools to craft, customize, and ship faster 🚀. It provides a robust toolkit for
          building stunning, interactive user interfaces with ease.
        </p>
        <ul className='text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-7/10'>
          <li>
            <span className='text-foreground font-semibold'>Open-source:</span> Dive into a growing, community-driven
            collection of copy-and-paste{' '}
            <Link href='/components' className='text-primary underline'>
              shadcn/ui components
            </Link>
            , shadcn blocks, and templates.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Component & Blocks variants:</span> Access a diverse,
            collection of customizable{' '}
            <Link href='/blocks' className='text-primary underline'>
              shadcn blocks
            </Link>{' '}
            and component variants to quickly build and style your UI with ease.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Animated variants with Motion:</span> Add smooth, modern
            animations to your components, enhancing user experiences with minimal effort.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Landing pages & Dashboards:</span> Explore 20+ premium &
            free{' '}
            <Link
              href='https://shadcnstudio.com/templates'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline'
            >
              Shadcn templates
            </Link>{' '}
            for dashboards, landing pages & more. Fully customizable & easy to use.
          </li>
          <li>
            <span className='text-foreground font-semibold'>shadcn/ui for Figma:</span> Speed up your workflow with{' '}
            <Link
              href='https://shadcnstudio.com/figma'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline'
            >
              Shadcn Figma
            </Link>{' '}
            UI components, blocks & templates — a full design library inspired by shadcn/ui.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Powerful theme generator:</span> Customize your UI instantly
            with{' '}
            <Link href='/theme-generator' className='text-primary underline'>
              Shadcn Theme Generator
            </Link>
            . Preview changes in real time and create consistent, on-brand designs faster.
          </li>
          <li>
            <span className='text-foreground font-semibold'>shadcn/studio MCP:</span> Integrate{' '}
            <Link
              href='https://shadcnstudio.com/mcp'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline'
            >
              shadcn/studio MCP
            </Link>{' '}
            Server directly into your favorite IDE and craft stunning shadcn/ui Components, Blocks and Pages inspired by
            shadcn/studio.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Shadcn Figma To Code Plugin:</span> Convert your Figma
            designs into production-ready code instantly with the{' '}
            <Link
              href='https://shadcnstudio.com/figma-plugin'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline'
            >
              Shadcn Figma Plugin
            </Link>
            .
          </li>
        </ul>
      </div>

      <div className='flex flex-col space-y-3'>
        <h2 className='text-xl font-bold sm:text-2xl'>Frequently Asked Questions</h2>
        <Accordion type='single' collapsible className='w-full'>
          {introFaqs.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionPrimitive.Header className='flex'>
                <AccordionPrimitive.Trigger className='text-foreground/80 flex flex-1 items-center justify-between py-3 text-start font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45'>
                  {question}
                  <PlusIcon className='text-muted-foreground size-5 shrink-0 transition-transform duration-200' />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className='text-muted-foreground'>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <DocsNavigation
        previousItem={null}
        nextItem={{
          name: 'Shadcn Accordion',
          url: '/docs/components/accordion'
        }}
      />
    </div>
  )
}

export default DocsPage
