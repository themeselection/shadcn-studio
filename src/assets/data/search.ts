// React Imports
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

// Third-party Imports
import { File, Circle, type LucideProps } from 'lucide-react'

// Config Imports
import { categories } from '@/config/components'

type SearchData = {
  title: string
  data: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
    name: string
    href: string
    shortcut?: string
  }[]
}

export const searchData: SearchData[] = [
  {
    title: 'Links',
    data: [
      {
        icon: File,
        name: 'Theme Editor',
        href: '/theme-editor'
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
      }
    ]
  },
  {
    title: 'Getting Started',
    data: [
      {
        icon: Circle,
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
          icon: Circle,
          name: category.name,
          href: `/docs/components/${category.slug}`
        }))
    ]
  }
]
