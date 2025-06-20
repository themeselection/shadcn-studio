// Next Imports
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

export const dynamic = 'force-dynamic'

// Component Imports
import ComponentsGrid from '@/components/ComponentsGrid'
import ComponentDetails from '@/components/ComponentDetails'
import ComponentCard from '@/components/ComponentCard'
import ComponentLoader from '@/components/ComponentLoader'

// Config Imports
import { categories, getCategory } from '@/config/components'

// Util Imports
import { getCachedFileTree, getCachedComponentItem, getComponentsByNames } from '@/utils/components'
import type { ProcessedComponentsData } from '@/types/components'

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const category = getCategory((await params).category)

  if (!category || category.isComingSoon) {
    return {}
  }

  const components = getComponentsByNames(category.components.map(item => item.name))
  const parentMetadata = await parent

  return {
    title: `Shadcn ${category.name}`,
    description: `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
    openGraph: {
      title: `Shadcn ${category.name}`,
      description: `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`,
      url: `https://shadcnstudio.com/docs/components/${category.slug}`,
      images: parentMetadata.openGraph?.images
    },
    twitter: {
      card: parentMetadata.twitter?.card || 'summary_large_image',
      title: `Shadcn ${category.name}`,
      description: `Elevate your UI with a growing collection of ${components.length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`
    },
    alternates: {
      canonical: `https://shadcnstudio.com/docs/components/${category.slug}`
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
    <div className='flex flex-1 flex-col space-y-4 p-4 sm:space-y-8 sm:p-8'>
      <div className='flex flex-col items-start space-y-3'>
        <h1 className='text-2xl font-bold sm:text-3xl'>{`Shadcn ${category.name}`}</h1>
        <p className='text-muted-foreground'>
          {`Elevate your UI with a growing collection of ${components.filter(component => !component?.isAnimated).length} Shadcn ${category.name.toLowerCase()} components, built using React and Tailwind CSS.`}
        </p>
      </div>
      {category.note}
      <ComponentsGrid {...category.breakpoints}>
        {components
          .filter(component => !component?.isAnimated)
          .map(component => (
            <ComponentCard key={component.name} componentName={component.name} className={component?.className}>
              <ComponentLoader componentName={component.name} category={category.slug} />
              <ComponentDetails
                componentsData={
                  validComponentsData.find(comp => comp.component.name === component.name) as ProcessedComponentsData
                }
              />
              {component?.badge && (
                <span className='absolute start-4.5 top-3 font-["Gamja_Flower"] text-lg'>{component?.badge}</span>
              )}
            </ComponentCard>
          ))}
      </ComponentsGrid>
      {category.hasAnimation && (
        <>
          <div id='animated-variants' className='flex flex-col items-start space-y-3 pt-24'>
            <h2 className='text-2xl font-bold sm:text-3xl'>{`Animated ${category.name}`}</h2>
            <p className='text-muted-foreground'>
              {`Enhance your interface with ${components.filter(component => component?.isAnimated).length} animated ${category.name.toLowerCase()} components, crafted with React, Tailwind CSS, and Motion for smooth, interactive animations.`}
            </p>
          </div>
          <ComponentsGrid {...category.animation?.breakpoints}>
            {components
              .filter(component => component?.isAnimated)
              .map(component => (
                <ComponentCard key={component.name} componentName={component.name} className={component?.className}>
                  <ComponentLoader componentName={component.name} category={category.slug} />
                  <ComponentDetails
                    componentsData={
                      validComponentsData.find(
                        comp => comp.component.name === component.name
                      ) as ProcessedComponentsData
                    }
                  />
                  {component?.badge && (
                    <span className='absolute start-4.5 top-3 font-["Gamja_Flower"] text-lg'>{component?.badge}</span>
                  )}
                </ComponentCard>
              ))}
          </ComponentsGrid>
        </>
      )}
    </div>
  )
}

export default Page
