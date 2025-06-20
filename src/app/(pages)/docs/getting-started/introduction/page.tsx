// Next Imports
import type { Metadata } from 'next'

// Third-party Imports
import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

// Component Imports
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'

// Data Imports
import { introFaqs } from '@/assets/data/faqs'

export const metadata: Metadata = {
  title: 'Introduction',
  description:
    'An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.',
  openGraph: {
    title: 'Introduction',
    description:
      'An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.',
    url: 'https://shadcnstudio.com/docs/getting-started/introduction',
    images: [
      {
        url: 'https://cdn.shadcnstudio.com/ss-assets/smm/marketing/shadcn-studio-smm-banner.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Shadcn Studio - Craft Stunning Shadcn UI, Lightning Fast'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introduction',
    description:
      'An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a powerful theme generator to craft, customize, and ship faster.'
  },
  alternates: {
    canonical: 'https://shadcnstudio.com/docs/getting-started/introduction'
  }
}

const DocsPage = () => {
  return (
    <div className='flex flex-1 flex-col space-y-6 p-4 sm:space-y-10 sm:p-8'>
      <div className='flex flex-col items-start space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Introduction</h1>
        <p className='text-muted-foreground'>
          An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a powerful
          theme generator to craft, customize, and ship faster.
        </p>
      </div>
      <div className='flex flex-col items-start space-y-3'>
        <h2 className='text-xl font-bold'>What is shadcn/studio?</h2>
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

      <div className='flex flex-col items-start space-y-3'>
        <h2 className='text-xl font-bold'>Not a Standard Library, but a Distribution of Components</h2>
        <p className='text-foreground/80'>
          Following the philosophy of Shadcn, shadcn/studio isn&apos;t a conventional “install-from-NPM” library.
          Rather, it&apos;s an open-source distribution of components designed for maximum adaptability. You can copy
          the code, modify styles, adjust logic, or integrate it with other tools—free from the limitations of typical
          libraries. This &quot;open code&quot; model empowers you to customize with confidence and creativity.
        </p>
      </div>

      <div className='flex flex-col items-start space-y-3'>
        <h2 className='text-xl font-bold'>Why Should I use shadcn/studio?</h2>
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

      <div className='flex flex-col items-start space-y-3'>
        <h3 className='text-md font-bold'>This is where shadcn/studio shines ✨</h3>
        <p className='text-foreground/80'>
          An open-source collection of copy-and-paste shadcn components, blocks, and templates - paired with a powerful
          theme generator to craft, customize, and ship faster 🚀. It provides a robust toolkit for building stunning,
          interactive user interfaces with ease.
        </p>
        <ul className='text-foreground/80 ms-8 list-disc space-y-2 lg:max-w-7/10'>
          <li>
            <span className='text-foreground font-semibold'>Open-source:</span> Dive into a growing, community-driven
            collection of copy-and-paste components, blocks, and templates.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Component & Blocks variants:</span> Access a diverse,
            collection of customizable shadcn component and block variants to quickly build and style your UI with ease.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Animated variants with Motion:</span> Add smooth, modern
            animations to your components, enhancing user experiences with minimal effort.
          </li>
          <li>
            <span className='text-foreground font-semibold'>Powerful theme generator:</span> Tailor your UI effortlessly
            with real-time previews, ensuring consistent, branded designs delivered faster.
          </li>
        </ul>
      </div>

      <div className='flex flex-col items-start space-y-3'>
        <h2 className='text-xl font-bold'>Frequently Asked Questions</h2>
        <Accordion type='single' collapsible className='w-full'>
          {introFaqs.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionPrimitive.Header className='flex'>
                <AccordionPrimitive.Trigger className='text-foreground/80 flex flex-1 items-center justify-between py-3 text-start font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45'>
                  {question}
                  <PlusIcon className='text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200' />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className='text-muted-foreground'>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default DocsPage
