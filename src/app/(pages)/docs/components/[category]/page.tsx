// Next Imports
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Third-party Imports
import { InfoIcon } from 'lucide-react'

// Type Imports
import type { ProcessedComponentsData } from '@/types/components'

// Component Imports
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import ComponentsGrid from '@/components/ComponentsGrid'
import ComponentDetails from '@/components/ComponentDetails'
import ComponentCard from '@/components/ComponentCard'
import ComponentLoader from '@/components/ComponentLoader'
import DocsNavigation from '@/components/DocsNavigation'

// Config Imports
import { categories, getCategory } from '@/config/components'

// Util Imports
import { getCachedFileTree, getCachedComponentItem, getComponentsByNames } from '@/utils/components'
import { cn } from '@/lib/utils'

type Props = {
  params: Promise<{ category: string }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category)

  if (!category || category.isComingSoon) {
    return {}
  }

  const components = getComponentsByNames(category.components.map(item => item.name))

  return {
    title: `Shadcn ${category.name}`,
    description: `Discover the ${components.length}+ Shadcn ${category.name} Component variants${category.hasAnimation ? ` including animated ${name}` : ''}. Enhance your UI using customizable React ${name} with TailwindCSS.`,
    openGraph: {
      title: `Shadcn ${category.name}`,
      description: `Discover the ${components.length}+ Shadcn ${category.name} Component variants${category.hasAnimation ? ` including animated ${name}` : ''}. Enhance your UI using customizable React ${name} with TailwindCSS.`,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/components/${category.slug}`,
      images: [
        {
          url: 'https://cdn.themeselection.com/ts-assets/shadcn-studio/free/marketing/shadcn-studio-smm-banner.png',
          type: 'image/png',
          width: 1200,
          height: 630,
          alt: 'Shadcn Studio - Craft Stunning Shadcn UI, Lightning Fast'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Shadcn ${category.name}`,
      description: `Discover the ${components.length}+ Shadcn ${category.name} Component variants${category.hasAnimation ? ` including animated ${name}` : ''}. Enhance your UI using customizable React ${name} with TailwindCSS.`
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/docs/components/${category.slug}`
    }
  }
}

export async function generateStaticParams() {
  return categories
    .filter(category => !category.isComingSoon)
    .map(category => ({
      category: category.slug
    }))
}

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = getCategory((await params).category)

  if (!category || category.isComingSoon) {
    notFound()
  }

  const availableCategories = categories.filter(cat => !cat.isComingSoon)

  const categoryIndex = availableCategories.findIndex(cat => cat.slug === category.slug)
  const previousCategory = availableCategories[categoryIndex - 1] || null
  const nextCategory = availableCategories[categoryIndex + 1] || null

  const components = getComponentsByNames(category.components.map(item => item.name))

  // Prepare components data for the client component
  const componentsData: (ProcessedComponentsData | null)[] = await Promise.all(
    components.map(async comp => {
      const item = await getCachedComponentItem(comp.name)

      if (!item?.files) {
        return null
      }

      const tree = getCachedFileTree(item.files)

      return {
        component: {
          ...comp,
          files: item.files
        },
        tree
      }
    })
  )

  const validComponentsData = componentsData.filter(item => item !== null) as ProcessedComponentsData[]

  return (
    <div className='flex flex-1 flex-col space-y-4 p-4 sm:space-y-8 sm:p-6 lg:p-8'>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>{`Shadcn ${category.name}`}</h1>
        <p className='text-muted-foreground'>
          {`Explore the collection of awesome Shadcn ${category.name} Components, featuring ${components.filter(component => !component?.meta?.isAnimated).length} ${category.name.toLowerCase()} variants designed for customizable, and interactive UI elements built with React and Tailwind CSS.`}
        </p>
      </div>
      <Alert className='border-accent-foreground/20 from-accent text-accent-foreground flex justify-between bg-gradient-to-b to-transparent to-60%'>
        <InfoIcon />
        <div className='flex flex-1 flex-col gap-1'>
          <AlertTitle>Have any suggestions for {category.name} variants?</AlertTitle>
          <AlertDescription className='text-accent-foreground/60'>
            <p>
              <Link
                href='https://discord.com/invite/kBHkY7DekX'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary underline'
              >
                Join our Discord community
              </Link>{' '}
              and share your ideas to help us improve and expand our component variants!
            </p>
          </AlertDescription>
        </div>
      </Alert>
      {category.note}
      <ComponentsGrid {...category.breakpoints}>
        {components
          .filter(component => !component?.meta?.isAnimated)
          .map(component => (
            <ComponentCard
              key={component.name}
              componentName={component.name}
              componentTitle={component.title}
              className={component?.meta?.className}
            >
              <ComponentLoader componentName={component.name} category={category.slug} />
              <ComponentDetails
                componentsData={
                  validComponentsData.find(comp => comp.component.name === component.name) as ProcessedComponentsData
                }
              />
              {component?.meta?.badge && (
                <span
                  className={cn('font-kalam absolute top-3 left-4.5 group-hover/item:hidden', {
                    'left-17': component.meta?.isPro
                  })}
                >
                  {component?.meta?.badge}
                </span>
              )}
            </ComponentCard>
          ))}
      </ComponentsGrid>
      {category.hasAnimation && (
        <>
          <div id='animated-variants' className='flex flex-col space-y-3 pt-24'>
            <h2 className='text-2xl font-bold sm:text-3xl'>{`Shadcn Animated ${category.name}`}</h2>
            <p className='text-muted-foreground'>
              {`Enhance your interface with ${components.filter(component => component?.meta?.isAnimated).length} Shadcn animated ${category.name.toLowerCase()} component variants, crafted with React, Tailwind CSS, and Motion for smooth, interactive animations.`}
            </p>
          </div>
          <ComponentsGrid {...category.animation?.breakpoints}>
            {components
              .filter(component => component?.meta?.isAnimated)
              .map(component => (
                <ComponentCard
                  key={component.name}
                  componentName={component.name}
                  componentTitle={component.title}
                  className={component?.meta?.className}
                >
                  <ComponentLoader componentName={component.name} category={category.slug} />
                  <ComponentDetails
                    componentsData={
                      validComponentsData.find(
                        comp => comp.component.name === component.name
                      ) as ProcessedComponentsData
                    }
                  />
                  {component?.meta?.badge && (
                    <span
                      className={cn('font-kalam absolute top-3 left-4.5 group-hover/item:hidden', {
                        'left-17': component.meta?.isPro
                      })}
                    >
                      {component?.meta?.badge}
                    </span>
                  )}
                </ComponentCard>
              ))}
          </ComponentsGrid>
        </>
      )}
      <DocsNavigation
        previousItem={
          previousCategory
            ? {
                name: `Shadcn ${previousCategory.name}`,
                url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/components/${previousCategory.slug}`
              }
            : {
                name: 'Getting Started - Introduction',
                url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/getting-started/introduction`
              }
        }
        nextItem={
          nextCategory
            ? {
                name: `Shadcn ${nextCategory.name}`,
                url: `${process.env.NEXT_PUBLIC_APP_URL}/docs/components/${nextCategory.slug}`
              }
            : null
        }
      />
    </div>
  )
}

export default Page
