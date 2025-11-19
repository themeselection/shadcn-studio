// React Imports
import { Fragment } from 'react'

// Next Imports
import type { Metadata, ResolvingMetadata } from 'next'

// Next Imports
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Component Imports
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import BlockPage from './BlockPage'

// Util Imports
import { getBlockCategory, getBlockSection, getSectionData } from '@/utils/blocks'

// Data Imports
import { blockCategories } from '@/assets/data/blocks-index'

type Props = {
  params: Promise<{ category: string; section: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // Params
  const { category, section } = await params

  // Vars
  const categoryData = getBlockCategory(category)
  const sectionData = getBlockSection(category, section)

  // Get the section data
  const sectionBlocksData = getSectionData(category, section)

  if (!categoryData || !sectionData || !sectionBlocksData) {
    return {}
  }

  const parentMetadata = await parent

  return {
    title: `Shadcn ${sectionData.title}`,
    description: sectionData.description,
    openGraph: {
      title: `Shadcn ${sectionData.title}`,
      description: sectionData.description,
      type: 'website',
      siteName: 'Shadcn Studio',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blocks/${categoryData.slug}/${sectionData.slug}`,
      images: parentMetadata.openGraph?.images
    },
    twitter: {
      card: parentMetadata.twitter?.card || 'summary_large_image',
      title: `Shadcn ${sectionData.title}`,
      description: sectionData.description
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blocks/${categoryData.slug}/${sectionData.slug}`
    }
  }
}

export async function generateStaticParams() {
  return blockCategories.flatMap(category =>
    category.sections.map(section => ({
      category: category.slug,
      section: section.slug
    }))
  )
}

const BlockInnerPage = async ({ params }: Props) => {
  // Params
  const { category, section } = await params

  // Vars
  const categoryData = getBlockCategory(category)
  const sectionData = getBlockSection(category, section)
  const sectionBlocksData = getSectionData(category, section)

  if (!categoryData || !sectionData || !sectionBlocksData) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Blocks', url: '/blocks' },
    { name: categoryData.name, url: `/blocks#${categoryData.slug}` },
    { name: sectionData.title.replace(/\s(Section|Component|Page)$/, '') }
  ]

  return (
    <>
      <div className='bg-background/60 sticky top-16 z-12 flex items-center justify-center backdrop-blur-[8px]'>
        <div className='mx-auto flex w-full max-w-screen-2xl gap-2 px-4 py-3 max-sm:flex-col sm:items-center sm:gap-4 sm:px-8'>
          <Breadcrumb>
            <BreadcrumbList className='text-base sm:gap-1.5'>
              {breadcrumbs.map((item, index) => (
                <Fragment key={item.name}>
                  <BreadcrumbItem>
                    {item.url ? (
                      <Link href={item.url} className='hover:text-primary'>
                        {item.name}
                      </Link>
                    ) : (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className='flex flex-col gap-4 px-4 py-12 max-xl:place-items-center max-xl:items-center max-xl:text-center sm:gap-8 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-semibold text-balance sm:text-4xl'>{sectionData.title}</h1>
        <p className='text-muted-foreground text-lg text-balance'>{sectionData.description}</p>
      </div>

      <div className='flex flex-col gap-4 px-4 py-12 max-xl:place-items-center max-xl:items-center max-xl:text-center sm:gap-8 sm:px-6 lg:px-8'>
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {sectionBlocksData.map((block, index) => {
            const sectionBlockData = blockCategories
              .filter(category => category.slug === block.category)[0]
              .sections.filter(section => section.slug === block.section)[0]

            return (
              <Link key={index} href={`/preview/${block.category}/${block.section}/${block.slug}`} target='_blank'>
                <BlockPage
                  sectionBlockData={sectionBlockData}
                  sectionBlocksData={sectionBlocksData}
                  index={index}
                  section={section}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BlockInnerPage
