// React Imports
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

// Third-party Imports
import { File, CircleIcon } from 'lucide-react'
import type { LucideProps } from 'lucide-react'

// Config Imports
import { categories } from '@/config/components'

// Data Imports
import { blockCategories } from './blocks-index'

type SearchData = {
  title: string
  data: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    name: string
    href: string
    shortcut?: string
    openInNewTab?: boolean
    tags?: string[]
  }[]
}

export const searchData: SearchData[] = [
  {
    title: 'Links',
    data: [
      {
        icon: File,
        name: 'Theme Generator',
        href: '/theme-generator'
      },
      {
        icon: File,
        name: 'Docs',
        href: '/docs'
      },
      {
        icon: File,
        name: 'Components',
        href: '/components'
      },
      {
        icon: File,
        name: 'Blocks',
        href: '/blocks'
      }
    ]
  },
  {
    title: 'Getting Started',
    data: [
      {
        icon: CircleIcon,
        name: 'Introduction',
        href: '/docs/getting-started/introduction'
      }
    ]
  },
  {
    title: 'Components',
    data: [
      ...categories
        .filter(category => !category.isComingSoon)
        .map(category => ({
          icon: CircleIcon,
          name: category.name,
          href: `/docs/components/${category.slug}`,
          tags: category.tags
        }))
    ]
  },
  ...blockCategories.map(category => ({
    title: category.title,
    data: category.sections.map(section => ({
      icon: CircleIcon,
      name: section.title,
      href: section.url
    }))
  }))
]
