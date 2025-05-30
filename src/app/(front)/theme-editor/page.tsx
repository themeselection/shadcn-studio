// React Imports
import type { ReactNode } from 'react'

// Next Imports
import type { Metadata } from 'next'

// Third-party Imports
import { PlusIcon, Sparkles } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

// Component Imports
import { ScrollArea } from '@/registry/new-york/ui/scroll-area'
import { Accordion, AccordionContent, AccordionItem } from '@/registry/new-york/ui/accordion'
import { Badge } from '@/registry/new-york/ui/badge'
import { Card, CardContent, CardHeader } from '@/registry/new-york/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import CardsDemo from '@/components/examples/cards'
import MailPage from '@/components/examples/mail'
import DashboardPage from '@/components/examples/dashboard'
import MusicPage from '@/components/examples/music'
import V4Page from '@/components/examples/v4'

// Util Imports
import { cn } from '@/registry/new-york/lib/utils'

// Data Imports
import { features } from '@/assets/data/features'
import { roadmap } from '@/assets/data/roadmap'
import { faqs } from '@/assets/data/faqs'

export const metadata: Metadata = {
  title: 'Shadcn Theme Editor',
  description: 'Preview your theme changes across different components and layouts.',
  openGraph: {
    title: 'Shadcn Theme Editor',
    description: 'Preview your theme changes across different components and layouts.',
    url: 'https://shadcnstudio.com/theme-editor',
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
    title: 'Shadcn Theme Editor',
    description: 'Preview your theme changes across different components and layouts.'
  },
  alternates: {
    canonical: 'https://shadcnstudio.com/theme-editor'
  }
}

const ThemeEditor = () => {
  return (
    <div className='p-4 sm:p-8'>
      <section className='pb-12 sm:pb-20'>
        <div className='mb-12 flex flex-col items-center justify-center gap-4'>
          <Badge variant='outline' className='rounded-full px-3 py-1.5 text-sm shadow-md'>
            <Sparkles className='size-4' />
            Visual Theme Editor
          </Badge>
          <h1 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>Shadcn Theme Editor</h1>
          <p className='text-muted-foreground max-w-[800px] text-center'>
            Preview your theme changes across different components and layouts.
          </p>
        </div>
        <Tabs defaultValue='examples' className='h-full w-full gap-6'>
          <TabsList className='w-full'>
            <TabsTrigger value='examples' className='cursor-pointer'>
              Examples
            </TabsTrigger>
            <TabsTrigger value='mail' className='cursor-pointer'>
              Mail
            </TabsTrigger>
            <TabsTrigger value='dashboard' className='cursor-pointer'>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value='music' className='cursor-pointer'>
              Music
            </TabsTrigger>
            <TabsTrigger value='v4' className='cursor-pointer'>
              Components
            </TabsTrigger>
          </TabsList>

          <TabsContent value='examples'>
            <CardsDemo />
          </TabsContent>

          <TabsContent value='mail'>
            <MailPage />
          </TabsContent>

          <TabsContent value='dashboard'>
            <DashboardPage />
          </TabsContent>

          <TabsContent value='music'>
            <MusicPage />
          </TabsContent>

          <TabsContent value='v4' className='rounded-lg border'>
            <ScrollArea className='h-[800px]'>
              <V4Page />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </section>
      <section className='py-12 sm:py-20'>
        <div className='mb-12 flex flex-col items-center justify-center gap-4'>
          <Badge variant='outline' className='rounded-full px-3 py-1.5 text-sm shadow-md'>
            <Sparkles className='size-4' />
            Features
          </Badge>
          <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>
            Design Your Perfect UI with Ease
          </h2>
          <p className='text-muted-foreground max-w-[800px] text-center'>
            Transform your shadcn components in real time—customize, save, and ship stunning interfaces faster than
            ever.
          </p>
        </div>
        <div className='mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => (
            <Card key={index} className='group gap-0'>
              <CardHeader className='pb-3'>
                <CardDecorator>
                  <feature.icon className='size-6' aria-hidden />
                </CardDecorator>
                <h3 className='mt-6 text-xl font-semibold'>{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-sm'>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section id='roadmap' className='py-12 sm:py-20'>
        <div className='mb-12 flex flex-col items-center justify-center gap-4'>
          <Badge variant='outline' className='rounded-full px-3 py-1.5 text-sm shadow-md'>
            <Sparkles className='size-4' />
            Roadmap
          </Badge>
          <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>What&apos;s Coming Next</h2>
          <p className='text-muted-foreground max-w-[800px] text-center'>
            Discover the latest updates and features we&apos;re working on to enhance your experience.
          </p>
        </div>
        <div className='mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {roadmap.map((item, index) => (
            <Card key={index} className='group gap-0'>
              <CardContent className='relative'>
                <div className='bg-muted mb-3 flex h-12 w-12 items-center justify-center rounded-full'>
                  <item.icon className='size-6' aria-hidden />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>{item.title}</h3>
                <p className='text-muted-foreground text-sm'>{item.description}</p>
                <Badge
                  variant={item.status === 'In Progress' ? 'outline' : 'secondary'}
                  className={cn('absolute end-6 top-0 shadow')}
                >
                  {item.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className='py-12 sm:py-20'>
        <div className='mb-12 flex flex-col items-center justify-center gap-4'>
          <Badge variant='outline' className='rounded-full px-3 py-1.5 text-sm shadow-md'>
            <Sparkles className='size-4' />
            FAQ
          </Badge>
          <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>Frequently Asked Questions</h2>
          <p className='text-muted-foreground max-w-[800px] text-center'>
            Find answers to common questions about shadcn/studio.
          </p>
        </div>
        <div className='mx-auto grid w-full max-w-6xl gap-x-10 md:grid-cols-2'>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.slice(0, 4).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionPrimitive.Header className='flex'>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                      'text-start text-lg'
                    )}
                  >
                    {question}
                    <PlusIcon className='text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200' />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className='text-muted-foreground'>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.slice(4).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index + 5}`}>
                <AccordionPrimitive.Header className='flex'>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      'flex flex-1 items-center justify-between py-4 font-medium tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                      'text-start text-lg'
                    )}
                  >
                    {question}
                    <PlusIcon className='text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200' />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className='text-muted-foreground'>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className='relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
    <div
      aria-hidden
      className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]'
    />
    <div aria-hidden className='to-background absolute inset-0 bg-radial from-transparent to-75%' />
    <div className='bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l'>
      {children}
    </div>
  </div>
)

export default ThemeEditor
